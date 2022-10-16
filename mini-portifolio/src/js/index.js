const tabs = document.querySelectorAll(".tab");

tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    if (tab.classList.contains("selected")) {
      return;
    }
    selectTab(tab);
    showTabInformation(tab);
  });
});

function selectTab(tab) {
  const selectedTab = document.querySelector(".tab.selected");
  selectedTab.classList.remove("selected");
  tab.classList.add("selected");
  console.log(tab);
}

function showTabInformation(tab) {
  const selectedInformation = document.querySelector(".information.selected");
  selectedInformation.classList.remove("selected");

  const tabInformationId = `information-${tab.id}`;
  const informationToBeShown = document.getElementById(tabInformationId);
  informationToBeShown.classList.add("selected");
}
