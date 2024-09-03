// Task 1: Countdown Timer

/**
 * Create a countdown timer that starts from a user-defined duration (in seconds) 
 * and updates every second until it reaches zero. Uses setInterval to update the timer display.
 */
function userCountDown(time) {
    // Store the interval ID so we can clear it later
    const countDown = setInterval(() => {
        // Check if there is remaining time
        if (time > 0) {
            // Log the remaining time
            console.log(`Time remaining: ${time}`);
            // Decrement the time by 1 second
            time -= 1;
        } else {
            // Log that the time is up and stop the countdown
            console.log("Time is up!!!");
            // Clear the interval to stop further updates
            clearInterval(countDown);
        }
    }, 1000); // 1000 milliseconds = 1 second
}

// Start the countdown timer with 10 seconds
userCountDown(10);


// Task 2: Delayed Notification

/**
 * Implement a function that displays a notification after a specified delay 
 * (in milliseconds) using setTimeout.
 * @param {number} time - The delay time in seconds before showing the notification.
 */
function delayed(time) {
    // Use setTimeout to delay the notification
    setTimeout(() => {
        // Log the surprise message after the delay
        console.log("Surprise!!!");
    }, time * 1000); // Convert seconds to milliseconds
}

// Call the delayed function to show a notification after 3 seconds
delayed(3);


// Task 3: Repeat Notification

/**
 * Develop a function that repeatedly displays a notification at fixed intervals 
 * until the user dismisses it. Uses setInterval to schedule the notifications.
 */
function repeat() {
    // Schedule the notification to repeat every 5 seconds (5000 milliseconds)
    const intervalId = setInterval(() => {
        // Prompt the user with a question
        const finished = prompt("Are you finished with those errands?");
        
        // If the user responds with "yes" or "Yes", clear the interval and stop the notifications
        if (finished.toLowerCase() === 'yes') {
            // Clear the interval to stop further notifications
            clearInterval(intervalId);
            // Alert the user that notifications have been stopped
            alert("Great! Notifications stopped.");
        }
    }, 5000); // Repeat the notification every 5 seconds
}

// Start the repeating notification
repeat();
