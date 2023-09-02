// Ans of no 1

function perform(a, b, callback) {
    const result = a + b;
    callback(result); 
}
function update(result) {
    const resultupdate = document.getElementById('q1');
    resultupdate.textContent = `The result is: ${result}`;
}

perform(5, 3, update);

// Ans of no 2

function printNumberWithDelay(number, delay, callback) {
    setTimeout(function() {
        const ques2 = document.getElementById('q2');
        const listItem = document.createElement('li');
        listItem.textContent = number;
        ques2.appendChild(listItem);
        callback();
    }, delay);
}

function printNumbersSequentially() {
    let number = 1;

    function printNextNumber() {
        if (number <= 7) {
            printNumberWithDelay(number, number * 1000, printNextNumber);
            number++;
        }
    }

    printNextNumber();
}

printNumbersSequentially();

// Ans of no 3

function NumberDelay(number, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const ques3 = document.getElementById('q3');
            const listItem = document.createElement('li');
            listItem.textContent = number;
            ques3.appendChild(listItem);
            resolve();
        }, delay);
    });
}

async function NumbersSequentially() {
    for (let number = 1; number <= 7; number++) {
        await NumberDelay(number, number * 1000);
    }
}

NumbersSequentially()
    .then(() => {
        console.log("All numbers printed.");
    })
    .catch((error) => {
        console.error("Error:", error);
    });

    // Ans of no 4

    function customPromise(value) {
        return new Promise((resolve, reject) => {
            if (value === 'yes') {
                resolve('Promise Resolved');
            } else {
                reject('Promise Rejected');
            }
        });
    }

    const ul = document.getElementById('q4');

    // Example 1: Resolved promise
    customPromise('yes')
        .then((result) => {
            ul.innerHTML += `<li>${result}</li>`;
        })
        .catch((error) => {
            ul.innerHTML += `<li>${error}</li>`;
        });

    // Example 2: Rejected promise
    customPromise()
        .then((result) => {
            ul.innerHTML += `<li>${result}</li>`;
        })
        .catch((error) => {
            ul.innerHTML += `<li>${error}</li>`;
        });
    

    // Ans of no 5
    
    function greet(name, callback) {
        const ques5 = document.getElementById('q5');
        ques5.textContent = `Hello, ${name}!`;
        callback();
    }

    function sayGoodbye() {
        const ques5 = document.getElementById('q5');
        ques5.textContent += ' Goodbye!';
    }
    greet('Alice', sayGoodbye); 

    // Ans of no 6

    function stepOne(callback) {
        setTimeout(function () {
            console.log('Step 1 completed');
            callback();
        }, 1000);
    }

    function stepTwo(callback) {
        setTimeout(function () {
            console.log('Step 2 completed');
            callback();
        }, 1000);
    }

    function stepThree(callback) {
        setTimeout(function () {
            console.log('Step 3 completed');
            callback();
        }, 1000);
    }

    // The callback hell
    stepOne(function () {
        stepTwo(function () {
            stepThree(function () {
                // Nested steps are done
                const resultElement = document.getElementById('q6');
                resultElement.textContent = 'All steps completed!';
            });
        });
    });

    // Ans of no 7

    function simulateAsyncOperation(success) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (success) {
                    resolve('Operation succeeded!');
                } else {
                    reject('Operation failed!');
                }
            }, 1000);
        });
    }

    // Usage of the Promise
    simulateAsyncOperation(true)
        .then((result) => {
            const ques7 = document.getElementById('q7');
            ques7.textContent = result;
        })
        .catch((error) => {
            const ques7 = document.getElementById('q7');
            ques7.textContent = error;
        });

    // Ans of no 8

    const username = 'octocat';
        async function fetchGitHubUserData(username) {
            try {
                const response = await fetch(`https://api.github.com/users/${username}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }
                const userData = await response.json();
                return userData;
            } catch (error) {
                throw error;
            }
        }
        async function updateWebpage() {
            try {
                const userData = await fetchGitHubUserData(username);
                const usernameElement = document.getElementById('username');
                const avatarElement = document.getElementById('avatar');

                usernameElement.textContent = userData.login;
                avatarElement.src = userData.avatar_url;
            } catch (error) {
                console.error('Error:', error.message);
            }
        }

        updateWebpage();

    // Ans of no 9

    function simulateAsyncOperation(id, duration) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(`Operation ${id} completed after ${duration} ms`);
            }, duration);
        });
    }

    // Define an array of asynchronous operations
    const operations = [
        simulateAsyncOperation(1, 2000),
        simulateAsyncOperation(2, 1000),
        simulateAsyncOperation(3, 1500),
    ];

    // Use Promise.all to wait for all operations to complete
    Promise.all(operations)
        .then(results => {
            const q9 = document.getElementById('q9');
            q9.textContent = `Results: ${results.join(', ')}`;
        });

      
      
      
      
      
      
      