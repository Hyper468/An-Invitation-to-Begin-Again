document.addEventListener('DOMContentLoaded', () => {
    const introBackgroundLayer = document.querySelector('.intro-background-layer');
    const introContentLayer = document.querySelector('.intro-content-layer');
    const introTextbox = document.querySelector('.intro-textbox');
    const continueBtn = document.getElementById('continueBtn');
    const backgroundSong = document.getElementById('backgroundSong');
    const poemContainer = document.querySelector('.poem-container');
    const poemTitleElement = document.getElementById('poemTitle');
    const poemLineElement = document.getElementById('poemLine'); // This will display all poem lines, including the ending ones.

    // --- Set background song volume ---
    if (backgroundSong) {
        backgroundSong.volume = 0.8; // Set volume to 80%
        backgroundSong.loop = true; // Ensure the song loops
        console.log("Background song volume set to 0.8 and loop enabled.");
    } else {
        console.error("Background song element not found!");
    }

    // --- YOUR POEM CONTENT ---
    const poemTitle = "A Story Still Breathing";
    // Each element in this array is a couplet (or a block of lines to display at once)
    const poemCouplets = [
        "Your love was calm, like morning dew,\nIt showed me skies I never knew",
        "You touched the parts I hid away,\nAnd lit the night inside my day",
        "You made me softer, made me whole,\nPoured quiet warmth into my soul",
        "I found a strength I’d never shown\nIn loving you, I found my home",

        "I made mistakes, I know that’s true,\nBut never once stopped loving you",
        "I was still learning how to care,\nAnd sometimes love got lost in fear",
        "I thought being quiet meant being strong,\nBut silence only felt so wrong",
        "I didn’t always say what’s real,\nBut every word, I used to feel",
        "My heart was full but hands unsure,\nStill growing, trying to love more pure",
        "I see it now, I own my part,\nNot from blame, but an open heart",
        "If ever you felt alone with me near,\nI'm sorry I wasn’t the warmth you needed to hear",
        "For every silence that left you cold,\nI carry that in my heart not to repeat, but to hold",
        "If there were moments you felt unseen while sitting right beside me,\nI'm sorry, your heart deserved more presence, not just my body quietly",

        "I faced my shadow, sat with pain,\nSo I don’t lose your light again",
        "I’ve built myself with steadier hands,\nWith purpose love now understands",
        "The boy you knew has grown to see\nWhat future takes to truly be",
        "I’m not who broke what once was true,\nI’m someone better, still for you",

        "I’ve grown in ways I wish you’d see,\nNot just in heart, but clarity",
        "I’ve building my dreams with steady hands,\nWith goals and roots that now can stand",
        "No longer drifting, chasing days\nI walk with calm, with wiser ways",
        "I’ve learned that love is not just fire,\nBut quiet trust and shared desire",
        "My vision now holds space for two,\nA future strong enough for you",
        "Where love feels safe, not just intense,\nWhere we both grow with no pretense",
        "If doubt still lingers in your mind,\nI hope these changes help you find",
        "That I’m not who I used to be,\nI’m someone now who sees clearly",

        "I miss the way you said my name,\nLike even silence had a flame",
        "I miss the way our hearts would meet,\nIn every laugh, in tangled feet",
        "I miss you most in quiet skies,\nIn moments when the light just dies",
        "The world moved on, but deep in me,\nYou’re still the echo I still see",

        "So here I stand, not with a plea,\nBut with a hope, will you meet me?",
        "Let’s talk, not fix, just feel again,\nLike how love danced in summer rain",
        "Not for the past we couldn't mend,\nBut for a bond that doesn't end",
        "If you still feel that silent spark,\nLet’s build again, heart by heart",

        "Let’s not let silence be the author of something still alive,\nSome bonds don’t break they just quietly survive",
        "If there’s still even a flicker, a whisper beneath the ache,\nLet’s sit, not to rewrite but to see what love still wants to make",
        "No blame, no pressure, just two hearts facing the truth,\nLet’s meet soul to soul like we did in our youth",
        "Forgive the moments I faltered, forgive the words unsaid,\nBut see the man I’ve become, not just the past we’ve shed",
        "If ever you doubted where my heart would stay,\nLook in your name, it’s where my tomorrows lay"
    ];

    // Added an extra '\n' to create more vertical space
    const endingLines = "So Chhavi… if even a whisper of us still lives in your light\nWill you take my hand, and let our hearts reunite?\n\nNot to chase what was, but to gently begin\nA love reborn, where both of us win.";
    // --- END OF POEM CONTENT ---

    let currentCoupletIndex = 0;

    // Initial sequence: background image appears (already there), then blurs, then textbox fades in
    setTimeout(() => {
        introBackgroundLayer.classList.add('blur'); // Apply blur to the background layer
        setTimeout(() => {
            introTextbox.classList.add('show'); // Fade in the textbox
        }, 2000); // Start fading textbox 2 seconds after blur starts
    }, 3000); // After 3 seconds, the blur effect starts

    continueBtn.addEventListener('click', () => {
        // Fade out the intro content layer
        introContentLayer.style.opacity = '0'; // Fade out the textbox and button
        introContentLayer.style.pointerEvents = 'none'; // Make content layer unclickable

        // The introBackgroundLayer stays, keeping its blur effect

        setTimeout(() => {
            introContentLayer.style.display = 'none'; // Hide content layer completely

            poemContainer.classList.add('show'); // Show the poem container over the blurred background
            backgroundSong.play(); // Start playing the song

            // Show poem title
            poemTitleElement.textContent = poemTitle;
            poemTitleElement.style.opacity = '1';

            setTimeout(() => {
                poemTitleElement.style.opacity = '0'; // Fade out poem title
                setTimeout(displayPoemCouplets, 1000); // Start displaying poem lines after title fades out
            }, 3000); // Poem title stays for 3 seconds
        }, 1000); // Wait for intro content to fade out
    });

    function displayPoemCouplets() {
        if (currentCoupletIndex < poemCouplets.length) {
            poemLineElement.textContent = poemCouplets[currentCoupletIndex];
            poemLineElement.style.opacity = '1'; // Fade in the current couplet

            setTimeout(() => {
                poemLineElement.style.opacity = '0'; // Fade out the current couplet
                currentCoupletIndex++;
                setTimeout(displayPoemCouplets, 1000); // Wait for fade out, then display next couplet
            }, 600); // Each couplet stays for 6 seconds
        } else {
            // All couplets displayed, now show the ending lines
            poemLineElement.textContent = endingLines;
            poemLineElement.style.opacity = '1'; // Fade in the ending lines
            console.log("Poem and ending lines finished!");

            // --- NEW: Start timer for image after ending lines appear ---
            setTimeout(endSequence, 15000); // 15 seconds (15000 milliseconds)
        }
    }

    // --- NEW FUNCTION: Handles the final image and caption ---
    function endSequence() {
        console.log("Starting end sequence: displaying image and caption.");

        // Create a new div to hold the image and caption
        const finalScreen = document.createElement('div');
        finalScreen.id = 'finalScreen'; // Give it an ID for CSS styling
        finalScreen.innerHTML = `
            <img src="https://github.com/Hyper468/An-Invitation-to-Begin-Again/blob/main/552924c5d913f43785c58e07371f8e53.jpg?raw=true" alt="Cat with Flower" class="final-image">
            <p class="final-caption">Shall we resume?</p>
        `;

        // Hide poem container content (poem lines)
        poemContainer.style.opacity = '0'; // Fade out existing poem content
        poemContainer.style.pointerEvents = 'none'; // Make unclickable

        // Add the new final screen to the body, fade it in
        document.body.appendChild(finalScreen);
        // Use a slight delay to allow poemContainer to start fading out
        setTimeout(() => {
            finalScreen.classList.add('show'); // Apply 'show' class to fade it in
            console.log("Final image and caption displayed.");
        }, 500); // 500ms delay for smoother transition
    }
});
