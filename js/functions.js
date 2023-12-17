const Fortunes = {
    greetings: ['Hola', 'Bonjour', 'Hallo', 'Nǐ hǎo', 'S̄wạs̄dī', 'Jambo', 'Sawubona', 'Kon nichiwa','Marhabaan','Nyob Zoo', 'Annyeonghaseyo'],
    colors: ['blue', 'red','yellow', 'green','orange', 'pink', 'black', 'brown', 'purple'],
    fortunes: [
        'You will be called in to fulfill a position of high honor and responsibility.',
        'A stranger, is a friend you have not spoken to yet.',
        'Jealousy doesnt open doors, it closes them!',
        'Our deeds determine us, as much as we determine our deeds.',
        'A fanatic is one who cant change his mind, and wont change the subject.',
        'You are very talented in many ways.',
        'Wealth awaits you very soon.',
        'Land is always on the mind of a flying bird.',
        'Fortune favors the brave.'
        ]
    };
    
    
            document.getElementById('fortuneButton').addEventListener('click', function() {
                function parts(arr) {
                    return arr[Math.floor(Math.random() * arr.length)];
                }
    
                const greeting = parts(Fortunes.greetings);
                const color = parts(Fortunes.colors);
                const fortune = parts(Fortunes.fortunes);
    
                const randomFortune = `${greeting}! Your lucky color of the day is ${color} and your fortune for today is: ${fortune}`;
    
                document.getElementById('fortune').innerText = randomFortune;
            });
    