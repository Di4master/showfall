let snowflakeCount = 40;
let snowflakeImages = ['snowflake1.svg', 'snowflake2.svg','snowflake3.svg'];
let snowfall = document.createElement('div');
snowfall.className = 'snowfall';
document.body.appendChild(snowfall);

for (let i = 1; i < snowflakeCount; i++) {
    let snowflake = document.createElement('div');
    snowflake.className = 'snowfall__flake';
    snowfall.appendChild(snowflake);
    snowflake.style.backgroundImage = getRandomSnowflake();
    snowflake.style.left = `${Math.random() * 100 - 1}%`;
    snowflake.style.animationDelay = `${Math.random() * -7}s`;
    snowflake.style.animationDuration = `${Math.random() * 3 + 4}s`;
    snowflake.style.width = snowflake.style.height = `${Math.round(Math.random() * 20) + 20}px`;
}

function getRandomSnowflake() {
    let num = Math.round(Math.random() * (snowflakeImages.length - 1) );
    let image = 'url(images/' + snowflakeImages[num] + ')';
    return image;
}