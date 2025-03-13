# 🎬 YouTube Minimal Player

## 📌 Overview

**YouTube Minimal Player** is a browser extension that provides a clutter-free YouTube viewing experience. It transforms standard YouTube pages into clean, minimalist video or live stream players by removing distracting elements like comments, recommendations, and other interface components.

## 🎯 Features

- ✅ **Minimal Video Mode** - Strip away everything but the video player for distraction-free viewing
- ✅ **Minimal Live Mode** - Optimize the interface for live streams with a clean video player and chat panel
- ✅ **Easy Toggle** - Switch between modes with a simple click in the extension popup
- ✅ **Instant Application** - Changes take effect immediately without manual page refreshes
- ✅ **Non-Intrusive** - Only activates when you choose to use it, keeping your normal YouTube experience intact
- ✅ **Lightweight** - Minimal performance impact on your browser

## 🖥️ Screenshot

![13-03-2025T18-05-13](https://github.com/user-attachments/assets/ebd87a28-2061-4b8f-a276-4cf431b48239)
![13-03-2025T18-04-53](https://github.com/user-attachments/assets/a87f63a3-a7d8-4257-bf51-f9667353fbae)
![13-03-2025T18-05-00](https://github.com/user-attachments/assets/c08108a9-1dab-4ecb-8d11-777139615abc)
![13-03-2025T18-05-09](https://github.com/user-attachments/assets/5aa1795f-381e-4dc5-8684-b377902960c5)
![13-03-2025T18-05-06](https://github.com/user-attachments/assets/e6f34a9c-9cea-414c-a732-411ad307a0f1)

## 🔧 Installation

### Manual Installation
1. Download this repository by clicking Code > Download ZIP
2. Extract the ZIP file to a location on your computer
3. Open Chrome and go to `chrome://extensions/`
4. Enable "Developer mode" in the top-right corner
5. Click "Load unpacked" and select the extracted folder

## 🚀 Usage

1. Navigate to any YouTube video or live stream page
2. Click the extension icon in your browser toolbar to open the popup
3. Select your preferred mode:
   - **Minimal Video Player** - Shows only the video player
   - **Minimal Live Player** - Shows the video player with a chat panel
4. The page will instantly transform to your selected view
5. To return to normal YouTube, toggle off both switches in the popup

## ⚙️ Modes Explained

### Minimal Video Player
- Removes all page elements except the video player
- Creates a full-screen, distraction-free viewing experience
- Perfect for focusing on video content without distractions

### Minimal Live Player
- Creates a dual-panel view with the video player (70%) and live chat (30%)
- Removes annoying banner messages and engagement prompts
- Ideal for watching live streams while still interacting with chat

## 🛠️ Technical Details

This extension works by:

1. Detecting when you're on a YouTube video page
2. Storing your preferred mode selection in local browser storage
3. Executing content scripts that modify the page DOM to remove unwanted elements
4. Preserving the video player and/or chat functionality
5. Applying custom CSS to optimize the viewing experience

## 🔒 Privacy

- **No Data Collection** - This extension does not collect or transmit any user data
- **Minimal Permissions** - Only requests access to:
  - `activeTab` - To modify the current YouTube page
  - `scripting` - To inject the content scripts
  - `storage` - To save your mode preferences

## 🔄 Updates and Maintenance

The extension is regularly updated to ensure compatibility with YouTube's interface changes. If you encounter any issues, please report them on GitHub.

## 🔮 Future Improvements

- Add customizable layout options for Live mode
- Include theater mode with adjustable player size
- Create keyboard shortcuts for quick mode switching
- Add dark/light theme options for the minimal interface

## 📝 License

This project is open-source under the MIT License.

## 👤 Author

Developed by [Saymonn](https://github.com/saymonn37). Contributions and feedback are welcome!
