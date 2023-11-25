// ==UserScript==
// @name         poe-open-exchange-filters
// @namespace    https://github.com/D4Enjoyer/poe-poe
// @version      1.0
// @description  Opens filters on POE Trade Exchange
// @author       A God Gamer with his dear friend ChatGPT
// @icon         https://www.google.com/s2/favicons?sz=64&domain=pathofexile.com
// @match        https://www.pathofexile.com/trade*
// @grant        none
// @require      https://code.jquery.com/jquery-latest.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==

// Left side / Items I want: Set true/false for each item to determine if it should be clicked
const leftItems = {
    "Currency": false, // false = currency filter open
    "Exotic Currency": true,
    "Ancestor Currency": false,
    "Sanctum & Unique Relics": false,
    "Shards & Splinters": false,
    "Fragments & Sets": true,
    "Memory Lines": false,
    "Scouting Reports": false,
    "Expedition Currency": false,
    "Delirium Orbs": false,
    "Catalysts": false,
    "Oils & Extractor": false,
    "Incubators": false,
    "Scarabs": false,
    "Delve Resonators": true,
    "Delve Fossils": true,
    "Essences": true,
    "Cards": false,
    "Maps": false,
    "Maps (Blighted)": false,
    "Maps (Blight-ravaged)": false,
    "Maps (Unique)": false
};

// Right side / Items I have: Set true/false for each item to determine if it should be clicked
const rightItems = {
    "Currency": false, // false = currency filter open
    "Exotic Currency": true,
    "Ancestor Currency": false,
    "Sanctum & Unique Relics": false,
    "Shards & Splinters": false,
    "Fragments & Sets": true,
    "Memory Lines": false,
    "Scouting Reports": false,
    "Expedition Currency": false,
    "Delirium Orbs": false,
    "Catalysts": false,
    "Oils & Extractor": false,
    "Incubators": false,
    "Scarabs": false,
    "Delve Resonators": true,
    "Delve Fossils": true,
    "Essences": true,
    "Cards": false,
    "Maps": false,
    "Maps (Blighted)": false,
    "Maps (Blight-ravaged)": false,
    "Maps (Unique)": false
};

let isFirstRenamed = false;

// Function to rename classes
function renameClasses() {
    $('.search-advanced-pane.brown').each(function () {
        //rename the first to "left"
        if (!isFirstRenamed) {
            $(this).removeClass('brown').addClass('left');
            console.log('Renamed Filter left');
            isFirstRenamed = true;
          //rename the second to "right"
        } else {
            $(this).removeClass('brown').addClass('right');
            console.log('Renamed Filter right');
        }
    });
}

// Function to click individual items
function clickItems(className, items) {
    $(`.search-advanced-pane.${className} .filter-title.filter-title-clickable`).each(function () {
        const itemName = $(this).text().trim();
        if (items[itemName]) {
            $(this).click(); // Click on the element
            //console.log('Clicked on', $(this));
        }
    });
}

// Main function
function main() {
    waitForKeyElements(".search-advanced-items.exchange", () => {
        // Rename classes
        renameClasses();

        // Click left items based on settings
        clickItems('left', leftItems);
        console.log('Clicked on left filters');

        // Click right items based on settings
        clickItems('right', rightItems);
        console.log('Clicked on right filters');
    });
}

// Run the main function
main();
