{
    `🖱️ → [User Clicks Button]
    ↓
📦 → handleClick()
      🔁 fetch("/api/add", POST, JSON)
    ↓
🌐 → API Route (/api/add/route.js)
      📥 await request.json()
      🖨️ console.log(data)       // 🖥️ Terminal output
      📤 return JSON response
    ↓
📲 → Client receives response
      🖨️ console.log(res)       // 🌐 Browser console
`}