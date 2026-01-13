function TAPPED(info) {
    $catalog.switch("catalog_home");
    updateActiveState("home");
}

function updateActiveState(active) {
    $nav_home.color = (active === "home") ? "#FFFFFF" : "#999999";
}
