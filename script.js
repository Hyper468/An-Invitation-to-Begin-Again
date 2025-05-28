document.addEventListener('DOMContentLoaded', () => {
    const introBackgroundLayer = document.querySelector('.intro-background-layer');
    const introContentLayer = document.querySelector('.intro-content-layer');
    const introTextbox = document.querySelector('.intro-textbox');
    const continueBtn = document.getElementById('continueBtn');
    const backgroundSong = document.getElementById('backgroundSong');
    const poemContainer = document.querySelector('.poem-container');
    const poemTitleElement = document.getElementById('poemTitle');
    const poemLineElement = document.getElementById('poemLine');
    // const endingTextbox = document.getElementById('endingTextbox'); // REMOVED: no longer in HTML

    console.log("DOM Content Loaded.");
    // console.log("endingTextbox element found:", endingTextbox); // REMOVED: no longer needed

    // --- Set background song volume ---
    if (backgroundSong) {
        backgroundSong.volume = 0.8; // Set volume to 80%
        console.log("Background song volume set to 0.8");
    } else {
        console.error("Background song element not found!");
    }

    // --- YOUR POEM CONTENT ---
    const poemTitle = "A Story Still Breathing";

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
        "If you still feel that silent spark,\nLet’s build again—heart by heart",

        "Let’s not let silence be the author of something still alive,\nSome bonds don’t break they just quietly survive",
        "If there’s still even a flicker, a whisper beneath the ache,\nLet’s sit, not to rewrite but to see what love still wants to make",
        "No blame, no pressure, just two hearts facing the truth,\nLet’s meet soul to soul like we did in our youth",
        "Forgive the moments I faltered, forgive the words unsaid,\nBut see the man I’ve become, not just the past we’ve shed",
        "If ever you doubted where my heart would stay,\nLook in your name, it’s where my tomorrows lay"
    ];

    // const endingLines = "..."; // REMOVED: no longer needed

    let currentCoupletIndex = 0;

    // Initial sequence: background image appears (already there), then blurs, then textbox fades in
    setTimeout(() => {
        introBackgroundLayer.classList.add('blur');
        setTimeout(() => {
            introTextbox.classList.add('show');
        }, 2000);
    }, 3000);

    continueBtn.addEventListener('click', () => {
        console.log("Continue button clicked.");
        introContentLayer.style.opacity = '0';
        introContentLayer.style.pointerEvents = 'none';

        setTimeout(() => {
            introContentLayer.style.display = 'none';
            poemContainer.classList.add('show');
            backgroundSong.play();
            console.log("Starting poem section.");

            // Show poem title
            poemTitleElement.textContent = poemTitle;
            poemTitleElement.style.opacity = '1';

            setTimeout(() => {
                poemTitleElement.style.opacity = '0';
                console.log("Poem title fading out, starting couplets.");
                setTimeout(displayPoemCouplets, 1000);
            }, 3000);
        }, 1000);
    });

    function displayPoemCouplets() {
        if (currentCoupletIndex < poemCouplets.length) {
            console.log(`Displaying couplet ${currentCoupletIndex + 1}/${poemCouplets.length}`);
            poemLineElement.textContent = poemCouplets[currentCoupletIndex];
            poemLineElement.style.opacity = '1';

            // No endingTextbox to hide anymore, so this block is removed
            // if (endingTextbox) {
            //     endingTextbox.classList.remove('show');
            //     endingTextbox.style.opacity = '0';
            //     endingTextbox.style.pointerEvents = 'none';
            // }

            setTimeout(() => {
                poemLineElement.style.opacity = '0';
                currentCoupletIndex++;
                setTimeout(displayPoemCouplets, 600); // Back to 6000ms as requested last time
            }, 6000); // Back to 6000ms as requested last time
        } else {
            // All couplets displayed - poem simply ends here, no ending lines
            console.log("All main poem couplets finished.");
            poemLineElement.style.opacity = '0'; // Ensure the last couplet fades out
            poemLineElement.style.pointerEvents = 'none'; // Make it unclickable

            // No endingTextbox to show anymore, so this block is removed
            // if (endingTextbox) {
            //     endingTextbox.textContent = endingLines;
            //     endingTextbox.classList.add('show');
            //     console.log("Ending lines textbox should be visible now.");
            // } else {
            //     console.error("ERROR: endingTextbox element was not found! Check HTML ID.");
            // }
        }
    }
});
