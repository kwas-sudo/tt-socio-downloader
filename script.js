const videoUrl = document.getElementById("videoUrl");
const message = document.getElementById("message");


// Check TikTok URL
function isTikTokUrl(url) {

  try {

    const parsedUrl = new URL(url);

    const hostname =
      parsedUrl.hostname.toLowerCase();

    return (
      hostname === "tiktok.com" ||
      hostname.endsWith(".tiktok.com")
    );

  } catch {

    return false;

  }

}


// Paste link
async function pasteLink() {

  try {

    const text =
      await navigator.clipboard.readText();

    if (!text) {

      message.textContent =
        "Clipboard is empty.";

      return;

    }

    videoUrl.value = text.trim();

    message.textContent =
      "Link pasted successfully.";

  } catch {

    message.textContent =
      "Please paste the TikTok link manually.";

  }

}


// Download button
function downloadVideo() {

  const url =
    videoUrl.value.trim();


  // Empty URL
  if (!url) {

    message.textContent =
      "Please paste a TikTok video link.";

    videoUrl.focus();

    return;

  }


  // Invalid URL
  if (!isTikTokUrl(url)) {

    message.textContent =
      "Please enter a valid TikTok URL.";

    return;

  }


  // Frontend demo message
  message.textContent =
    "TikTok link accepted. Downloader service will be connected next.";

}
