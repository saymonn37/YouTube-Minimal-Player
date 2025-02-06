# 📌 YT Minimal Video & Live Player

🚀 **YT Minimal Video & Live Player** is a Chrome extension that allows users to switch YouTube's display mode to a minimal video player or a live mode with an embedded chat. It enables distraction-free viewing by removing unnecessary elements and focusing only on the video content.

---

## 🎯 Features

✅ **Minimal Video Mode** – Displays only the video player, removing all other YouTube elements.  
✅ **Minimal Live Mode** – Shows the video player with an optional embedded live chat.  
✅ **Easy Toggle Switch** – Quickly switch between modes using the extension's popup.  
✅ **Lightweight & Fast** – Works seamlessly without affecting video playback performance.  
✅ **No Extra Permissions** – Requires only basic permissions for execution.  

---

## 🛠️ Installation

This extension is not available on the Chrome Web Store. To install it manually, follow these steps:

1. **Download the repository**:
   ```bash
   git clone https://github.com/saymonn37/YouTube-Minimal-Player.git
   cd YouTube-Minimal-Player
   ```

2. **Enable Developer Mode** in Chrome:
   - Open Chrome and navigate to `chrome://extensions/`.
   - Toggle **Developer Mode** (top right corner).

3. **Load Unpacked Extension**:
   - Click **"Load unpacked"**.
   - Select the downloaded folder containing the extension files.

4. **Use the Extension**:
   - Click the extension icon in the Chrome toolbar.
   - Toggle between **Minimal Video Mode** and **Minimal Live Mode**.

---

## 🚀 How It Works

1. Open a **YouTube** video or live stream.
2. Click on the **extension icon**.
3. Select one of the following modes:
   - **Minimal Video Mode** → Shows only the video.
   - **Minimal Live Mode** → Shows the video + live chat.
4. The page will reload, applying the selected mode.

---

## 🖥️ UI Overview

The extension popup includes two toggle switches:

- **Minimal Video Player**: Enables the simplified video-only mode.
- **Minimal Live Player**: Enables the video with embedded live chat.

---

## 📜 Technical Details

- **Manifest v3**: Uses the latest Chrome extension framework.
- **Content Scripts**: Injected into YouTube pages to modify the UI.
- **Session Storage**: Stores the selected mode for persistence.
- **JavaScript Execution**: Dynamically applies changes without additional requests.

### **Main Files**
| File                  | Description |
|----------------------|-------------|
| `manifest.json`      | Defines extension settings. |
| `background.js`      | Handles user interactions and script execution. |
| `contentScript.js`   | Applies minimal video mode. |
| `contentScriptLive.js` | Applies minimal live mode with chat. |
| `popup.html`         | Creates the UI for the extension popup. |
| `popup.js`          | Manages toggle actions and reload behavior. |

---

## 🔧 Troubleshooting

| Issue | Solution |
|-------|----------|
| Extension not loading | Make sure Developer Mode is enabled and you selected the correct folder. |
| YouTube page not changing | Try refreshing the page after selecting a mode. |
| Live chat not appearing | Ensure the stream has an active chat. |

---

## 🏗️ Future Improvements

- Add support for **keyboard shortcuts**.
- Implement **dark mode** for the popup UI.

---

## 📝 License

This project is open-source under the **MIT License**.

## 👥 Author

Developed by [Saymonn](https://github.com/saymonn37). Contributions and feedback are welcome! 🚀
