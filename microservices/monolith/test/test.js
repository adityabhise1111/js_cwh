const autocannon = require('autocannon');

const totalDuration = 30; // seconds
const cycleDuration = 5;  // seconds per test
let elapsed = 0;

// Accumulators
let homeStats = { requests: 0, duration: 0 };
let stressStats = { requests: 0, duration: 0 };

function runTest(url, label, accum, onComplete) {
    autocannon({
        url,
        duration: cycleDuration,
        connections: 10,
        pipelining: 1
    }, (err, result) => {
        if (err) {
            console.error(`Error during ${label} test:`, err);
            return;
        }

        accum.requests += result.requests.total;
        accum.duration += result.duration;

        onComplete();
    });
}

function startAlternatingTraffic() {
    function cycle() {
        if (elapsed >= totalDuration) {
            // Final summary
            console.log(`\nHome route - Total Requests: ${homeStats.requests} in ${homeStats.duration.toFixed(2)} seconds`);
            console.log(`Stress route - Total Requests: ${stressStats.requests} in ${stressStats.duration.toFixed(2)} seconds`);
            return;
        }

        runTest('http://localhost:3000/', 'Home route', homeStats, () => {
            elapsed += cycleDuration;

            if (elapsed >= totalDuration) {
                console.log(`\nHome route - Total Requests: ${homeStats.requests} in ${homeStats.duration.toFixed(2)} seconds`);
                console.log(`Stress route - Total Requests: ${stressStats.requests} in ${stressStats.duration.toFixed(2)} seconds`);
                return;
            }

            runTest('http://localhost:3000/stress-test', 'Stress route', stressStats, () => {
                elapsed += cycleDuration;
                cycle();
            });
        });
    }

    cycle();
}

startAlternatingTraffic();
