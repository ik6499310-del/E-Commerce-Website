# Stride - Fashion & Footwear store (demo)

Files
- stride-v3-single-file.html : whole site in ONE file (open directly in browser)
- project/index.html, style.css, app.js : same site split into 3 files

What works when opened locally
- Store, product art, quick view, cart, wishlist, search, sort, animations

What needs a backend (works only inside claude.ai where it was built)
- Login/Register, My orders, Admin dashboard live data
  (they use the claude.ai artifact database: claude.use("db") and claude.use("user"))

Admin
- Open index.html#admin
- Login check is client-side only (hashed in app.js, constant AH). Not real security.
- For a real site replace db/user calls with a backend (Node + database or Firebase)
  and check admin credentials on the server.

Routes: #shop, #orders, #admin
