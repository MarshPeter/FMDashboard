import data from '../data/data.json' assert {type: 'json'};
console.log(data);

const navItems = document.getElementsByClassName("nav-list__item");
const sections = document.getElementsByClassName("activity-section");

adjustAllSectionContent("weekly", sections, data);

for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener("click", () => handleNavPeriodSelection(navItems[i], navItems, sections, data));
}

for (let i = 0; i < sections.length; i++) {
    let sectionSettingsButton = sections[i].getElementsByClassName("section-settings__button")[0];
    let sectionDescription = sections[i].getElementsByClassName("section-description")[0];
    sectionSettingsButton.addEventListener("mouseover", () => {
        sectionDescription.classList.remove("section-description--hover");
    })
    sectionSettingsButton.addEventListener("mouseout", () => { 
        sectionDescription.classList.add("section-description--hover");
    })
}

// the following is concerned with adjusting the classes of description sections to get the correct hover effect

// the following is concerned with modifying data based on period selection by the user
function handleNavPeriodSelection(thisNavItem, allNavItems, sections, data) {
    removeSelectedIcon(allNavItems);
    addSelectionHighlightToNavlink(thisNavItem);
    changeAllSectionContents(thisNavItem, sections, data);
}

function adjustCurrentTimeForSection(currentTimeElement, updatedCurrentTimeContent) {
    if (updatedCurrentTimeContent === 1) {
        currentTimeElement.textContent = "1hr";
    } else {
        currentTimeElement.textContent = updatedCurrentTimeContent + "hrs";
    }
}

function adjustPreviousTimeContent(pastTimeElement, updatedPreviousTimeContent, selectionPeriod) {
    let string = "";
    let hoursPortion = "";
    if (updatedPreviousTimeContent === 1) {
        hoursPortion = "1hr";
    } else {
        hoursPortion = updatedPreviousTimeContent + "hrs";
    }
    switch (selectionPeriod) {
        case "daily":
            string = `Yesterday - ${hoursPortion}`;
            break;
        case "weekly":
            string = `Last Week - ${hoursPortion}`;
            break;
        case "monthly":
            string = `Last Month - ${hoursPortion}`;
            break;
    }

    pastTimeElement.textContent = string;
}

function adjustIndividualSectionContent(sectionName, selectionPeriod, data, section) {
    let matchedSection = null;
    for (let i = 0; i < data.length; i++) {
        if (data[i].title.toLowerCase() === sectionName) {
            matchedSection = i;
            break;
        }
    }

    // no matching data and section found
    if (matchedSection === null) {
        return;
    }

    let currentTimeElement = section.getElementsByClassName("section-description__current-duration")[0];
    let pastTimeElement = section.getElementsByClassName("section-description__past-duration")[0];
    let updatedCurrentTimeContent = data[matchedSection].timeframes[selectionPeriod].current;
    let updatedPreviousTimeContent = data[matchedSection].timeframes[selectionPeriod].previous;
    adjustCurrentTimeForSection(currentTimeElement, updatedCurrentTimeContent);
    adjustPreviousTimeContent(pastTimeElement, updatedPreviousTimeContent, selectionPeriod);
}

function adjustAllSectionContent(selectionPeriod, sections, data) {
    for (let i = 0; i < sections.length; i++) {
        let sectionName = sections[i].classList[1].replace("-", " ");
        adjustIndividualSectionContent(sectionName, selectionPeriod, data, sections[i]);
    }
}

function getNavSectionName(selectedNavItem) {
    return selectedNavItem.children[0].textContent.trim().toLowerCase();
}

function changeAllSectionContents(selectedNavItem, sections, data) {
    const selectionPeriod = getNavSectionName(selectedNavItem);
    adjustAllSectionContent(selectionPeriod, sections, data)
}

function removeSelectedIcon(navItems) {
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].classList.remove('nav-list__item--selected');
    }
}

function addSelectionHighlightToNavlink(selectedNavItem) {
    selectedNavItem.classList.add('nav-list__item--selected');
}