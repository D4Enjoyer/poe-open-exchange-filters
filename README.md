# poe-open-exchange-filters - [Install Link](https://github.com/D4Enjoyer/poe-open-exchange-filters/raw/main/poe-open-exchange-filters.user.js)

## Description
This userscript automates the filtering process on Path of Exile Trade Exchange by allowing the user to specify which filters to activate through clicking. 

## Demo

<img src="https://i.imgur.com/6G6eXWN.gif" alt="Script Demo">

## How it Works
The script identifies specific filter categories and allows the user to activate or deactivate them through the script settings. Upon loading the Path of Exile Trade Exchange, the script will click on specified filter items for both the "Left" and "Right" filter panels to activate them. It utilizes jQuery for DOM manipulation and allows customization of filter activation.

## Installation
1. **Install a Userscript Manager**: Use a browser extension like Tampermonkey.
2. **Install the Script**: Add the script to your userscript manager by clicking on the [Install Link](https://github.com/D4Enjoyer/poe-open-exchange-filters/raw/main/poe-open-exchange-filters.user.js) or in any other way that you prefer.

## Usage
Once the userscript is installed:
- Navigate to the Path of Exile Trade Exchange.
- The script will automatically activate specified filter items based on your settings in the script.

## Customization
- **Setting Left Items**: Modify the `leftItems` object in the script to control which items are clicked for the "Left" (Items I want) filter panel.  
  <img src="https://i.imgur.com/z1tGoDA.png" alt="Left">
- **Setting Right Items**: Modify the `rightItems` object in the script to control which items are clicked for the "Right" (Items I have) filter panel.  
  <img src="https://i.imgur.com/hNKnqij.png" alt="Right">
  
## Author
A God Gamer with support from his dear friend ChatGPT
