# YouTube Minimal Player

A Chrome extension that strips a YouTube page down to the player — with or without live chat.

![Screenshot](https://github.com/user-attachments/assets/ebd87a28-2061-4b8f-a276-4cf431b48239)

## Features

- **Video mode** – only the player, filling the whole window.
- **Live mode** – player (70%) next to live chat (30%), with chat banners and engagement prompts removed.
- **Per tab** – the mode applies only to the current tab and resets when the tab is closed.
- **No data collection** – nothing is stored or sent anywhere.

## Installation

1. Download the repository (**Code → Download ZIP**) and extract it.
2. Open `chrome://extensions` and enable **Developer mode**.
3. Click **Load unpacked** and select the extracted folder.

## Usage

1. Open a YouTube video or live stream.
2. Click the extension icon and switch on **Video Player** or **Live Player**.
3. The page reloads in the selected mode. Switch it off to go back to normal YouTube.

<details>
<summary>More screenshots</summary>

![Screenshot](https://github.com/user-attachments/assets/a87f63a3-a7d8-4257-bf51-f9667353fbae)
![Screenshot](https://github.com/user-attachments/assets/c08108a9-1dab-4ecb-8d11-777139615abc)
![Screenshot](https://github.com/user-attachments/assets/5aa1795f-381e-4dc5-8684-b377902960c5)
![Screenshot](https://github.com/user-attachments/assets/e6f34a9c-9cea-414c-a732-411ad307a0f1)

</details>

## How it works

The popup saves the selected mode in the tab's `sessionStorage` and reloads the page. Content scripts then clear the page and keep only the player (plus the chat iframe in live mode).

**Permissions:** `activeTab` and `scripting` – used only by the popup to read and set the mode in the current tab.

## Contributing

Found a bug or a layout broken by a YouTube update? [Open an issue](https://github.com/saymonn37/YouTube-Minimal-Player/issues).

## License

MIT © [Saymonn](https://github.com/saymonn37)
