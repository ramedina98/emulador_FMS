import React, { useEffect, useState } from "react";

const MenuBar: React.FC = () => {
    // state to store the text to be displayed...
    const [text, setText] = useState("");
    // state to control wheter the text is show or not...
    const [showText, setShowText] = useState(false); 

    useEffect(() => {
        // full text to be displayed...
        const fullText = "EMULADOR FMS";
        // current index of the text...
        let currentIndex = 0;
        // variable to control the direction of the animation (forward or backward)...
        let forward = true;

        // Function to type the text letter by letter
        const typeText = () => {
        if (forward) {
            // If we are moving forward
            if (currentIndex <= fullText.length) {
                // As long as we haven't reached the end of the full text
                setText(fullText.slice(0, currentIndex)); // Set the text up to the current index
                currentIndex++; // Increment the index to move to the next letter
            } else {
                // Once we've shown the entire text, change the direction to backward
                forward = false;
                // Wait for 1 second before starting to clear
                setTimeout(clearText, 1000);
                return;
            }
        } else {
            // If we are moving backward
            if (currentIndex >= 0) {
                // As long as we haven't reached the beginning of the text
                setText(fullText.slice(0, currentIndex)); // Set the text up to the current index
                currentIndex--; // Decrement the index to move to the previous letter
            } else {
                // Once only the first letter remains, change the direction to forward
                forward = true;
            }
        }

            // Set a pause before showing the next letter
            setTimeout(typeText, 100); 
        };

        // Function to clear the text letter by letter
        const clearText = () => {
            // Set the index to the end of the text
            currentIndex = fullText.length - 1;
            // Set the direction to backward
            forward = false;
            // Wait for 1 second before starting to type again
            setTimeout(typeText, 1000); 
        };

        // Show the text and start the animation when the component mounts
        setShowText(true);
        typeText();

        // Cleanup function when the component unmounts
        return () => {
            setShowText(false);
        };
    }, []);

    return <>
        <div
            className="w-full bg-menuBar px-3 py-2 flex justify-start items-center"
        >
            <div>
                <div
                    style={{ 
                        width: '200px',
                        height: '37px',
                        fontSize: '1em',
                        animation: showText ? "none" : "fading 3s",
                        animationIterationCount: "infinite",
                        animationDelay: "1s"
                    }}
                    className="text-neon flex justify-start items-center"
                >
                    {text}
                </div>
            </div>
        </div>
    </>
}

export default MenuBar