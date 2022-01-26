const circleProgress = document.querySelector('.circle-progress');
const numberOfBreaths = document.querySelector('.breath-input');
const start = document.querySelector('.start');
const instructions = document.querySelector('.instructions');
const breathsText = document.querySelector('.breaths-text');

let breathsLeft = 3;

// watching for selected breaths from user

numberOfBreaths.addEventListener('change', () => {
    breathsLeft = numberOfBreaths.value;
    breathsText.innerText = breathsLeft;
});

// grow/shrink circle

const growCircle = () => {
    circleProgress.classList.add('circle-grow');
    setTimeout(() => {
        circleProgress.classList.remove('circle-grow');
    }, 8000)
};

// breathing instructions

const breathTextUpdate = () => {
    breathsLeft--;
    breathsText.innerText = breathsLeft;
    instructions.innerText = "Take a Deep Breath.";
    setTimeout(() => {
        instructions.innerText = "Hold Breath...";
        setTimeout(() => {
            instructions.innerText = "Exhale Slowly"
        }, 4000);
    }, 4000);
};

// breathing app function

const breathingApp = () => {
    const breathingAnimation = setInterval(() => {
        if (breathsLeft === 0) {
            clearInterval(breathingAnimation);
            instructions.innerText = "Breathing session completed. Click 'Begin' to start another session.";
            start.classList.remove("button-inactive");
            breathsLeft = numberOfBreaths.value;
            breathsText.innerText = breathsLeft;
            return;
        }
        growCircle();
    breathTextUpdate();
    }, 12000)
}

// start breathing event listener

start.addEventListener('click', () => {
    start.classList.add("button-inactive");
    instructions.innerText = "Start to relax and get ready to begin breathing.";
    setTimeout(() => {
        instructions.innerText= "Breathing is about to begin."
        setTimeout(() => {
            breathingApp();
            growCircle();
            breathTextUpdate();
        }, 2000);
    }, 2000);
   
});