const apiKey = '2e3d3c9c78d2b3b8e2752904f856415f';  // Replace with your Flickr API key

// Array of sample quotes
const quotes = [
        { text: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
        { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
        { text: "The best way out is always through.", author: "Robert Frost" },
        { text: "You can never cross the ocean until you have the courage to lose sight of the shore.", author: "Christopher Columbus" },
        { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
        { text: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
        { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
        { text: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
        { text: "Our lives begin to end the day we become silent about things that matter.", author: "Martin Luther King Jr." },
        { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
        { text: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.", author: "Ralph Waldo Emerson" },
        { text: "Do one thing every day that scares you.", author: "Eleanor Roosevelt" },
        { text: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
        { text: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
        { text: "The best revenge is massive success.", author: "Frank Sinatra" },
        { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
        { text: "It’s not whether you get knocked down, it’s whether you get up.", author: "Vince Lombardi" },
        { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
        { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
        { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
        { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
        { text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Aristotle" },
        { text: "A person who never made a mistake never tried anything new.", author: "Albert Einstein" },
        { text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
        { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
        { text: "You don’t have to be great to start, but you have to start to be great.", author: "Zig Ziglar" },
        { text: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
        { text: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
        { text: "It is never too late to be what you might have been.", author: "George Eliot" },
        { text: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Unknown" },
        { text: "Don’t wait for opportunity. Create it.", author: "Unknown" },
        { text: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
        { text: "Everything you can imagine is real.", author: "Pablo Picasso" },
        { text: "If you want to achieve greatness stop asking for permission.", author: "Unknown" },
        { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
        { text: "The only way to achieve the impossible is to believe it is possible.", author: "Charles Kingsleigh" },
        { text: "Believe you can and you’re halfway there.", author: "Theodore Roosevelt" },
        { text: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
        { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
        { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
        { text: "Success seems to be connected with action. Successful people keep moving. They make mistakes, but they don’t quit.", author: "Conrad Hilton" },
        { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
        { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
        { text: "To live a creative life, we must lose our fear of being wrong.", author: "Joseph Chilton Pearce" },
        { text: "Success is how high you bounce when you hit bottom.", author: "George S. Patton" },
        { text: "Keep going. Everything you need will come to you at the perfect time.", author: "Unknown" },
        { text: "What we achieve inwardly will change outer reality.", author: "Plutarch" },
        { text: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
        { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
        { text: "The future depends on what we do in the present.", author: "Mahatma Gandhi" },
        { text: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
        { text: "The only place where success comes before work is in the dictionary.", author: "Vidal Sassoon" },
        { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
        { text: "A goal without a plan is just a wish.", author: "Antoine de Saint-Exupéry" },
        { text: "In three words I can sum up everything I’ve learned about life: it goes on.", author: "Robert Frost" },
        { text: "You can’t go back and change the beginning, but you can start where you are and change the ending.", author: "C.S. Lewis" },
        { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
        { text: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
        { text: "We do not remember days; we remember moments.", author: "Cesare Pavese" },
        { text: "To be successful, you must act big, think big and talk big.", author: "Donald Trump" },
        { text: "If you want to live a happy life, tie it to a goal, not to people or things.", author: "Albert Einstein" },
        { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
        { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
        { text: "Don’t stop when you’re tired. Stop when you’re done.", author: "Unknown" },
        { text: "A goal is not always meant to be reached, it often serves simply as something to aim at.", author: "Bruce Lee" },
        { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
        { text: "Success doesn’t come from what you do occasionally, it comes from what you do consistently.", author: "Marie Forleo" },
        { text: "Everything has beauty, but not everyone sees it.", author: "Confucius" },
        { text: "Do what you love and you’ll never work a day in your life.", author: "Confucius" },
        { text: "Be the change you wish to see in the world.", author: "Mahatma Gandhi" },
        { text: "You have to learn the rules of the game. And then you have to play better than anyone else.", author: "Albert Einstein" },
        { text: "Your limitation—it's only your imagination.", author: "Unknown" },
        { text: "Dream it. Wish it. Do it.", author: "Unknown" },
        { text: "Success doesn’t just find you. You have to go out and get it.", author: "Unknown" },
        { text: "Dream bigger. Do bigger.", author: "Unknown" },
        { text: "Don’t stop when you’re tired. Stop when you’re done.", author: "Unknown" },
        { text: "Wake up with determination. Go to bed with satisfaction.", author: "Unknown" },
        { text: "Little things make big days.", author: "Unknown" },
        { text: "It’s going to be hard, but hard does not mean impossible.", author: "Unknown" },
        { text: "Don’t wait for opportunity. Create it.", author: "Unknown" },
        { text: "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.", author: "Unknown" },
        { text: "The key to success is to focus on goals, not obstacles.", author: "Unknown" },
        { text: "Dream it. Believe it. Build it.", author: "Unknown" },
        { text: "There are no limits to what you can accomplish, except the limits you place on your own thinking.", author: "Brian Tracy" },
        { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
        
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
        { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
        { text: "Don't be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
        { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
        { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
        { text: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi" },
        { text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Aristotle" },
        { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
        { text: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
        { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
        { text: "Do one thing every day that scares you.", author: "Eleanor Roosevelt" },
        { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
        { text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
        { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
        { text: "The best revenge is massive success.", author: "Frank Sinatra" },
        { text: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
        { text: "Opportunities don't happen, you create them.", author: "Chris Grosser" },
        { text: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.", author: "Ralph Waldo Emerson" },
        { text: "Life is really simple, but we insist on making it complicated.", author: "Confucius" },
        { text: "The more that you read, the more things you will know. The more that you learn, the more places you'll go.", author: "Dr. Seuss" },
        { text: "It is never too late to be what you might have been.", author: "George Eliot" },
        { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
        { text: "To be great is to be misunderstood.", author: "Ralph Waldo Emerson" },
        { text: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson" },
        { text: "I am not a product of my circumstances. I am a product of my decisions.", author: "Stephen Covey" },
        { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
        { text: "The only way to achieve the impossible is to believe it is possible.", author: "Charles Kingsleigh" },
        { text: "Everything you've ever wanted is on the other side of fear.", author: "George Addair" },
        { text: "You must not give up. You must not allow yourself to be defeated.", author: "Maya Angelou" },
        { text: "It’s not whether you get knocked down, it’s whether you get up.", author: "Vince Lombardi" },
        { text: "A journey of a thousand miles begins with a single step.", author: "Lao Tzu" },
        { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
        { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
        { text: "If you can dream it, you can do it.", author: "Walt Disney" },
        { text: "We can't help everyone, but everyone can help someone.", author: "Ronald Reagan" },
        { text: "It’s not the years in your life that count, it’s the life in your years.", author: "Abraham Lincoln" },
        { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
        { text: "Happiness is not something ready-made. It comes from your own actions.", author: "Dalai Lama" },
        { text: "I never dreamed about success. I worked for it.", author: "Estée Lauder" },
        { text: "Doubt kills more dreams than failure ever will.", author: "Suzy Kassem" },
        { text: "To live a creative life, we must lose our fear of being wrong.", author: "Joseph Chilton Pearce" },
        { text: "Good things come to those who hustle.", author: "Anais Nin" },
        { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
        { text: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett" },
        { text: "The only person you are destined to become is the person you decide to be.", author: "Ralph Waldo Emerson" },
        { text: "Try not to become a man of success. Rather become a man of value.", author: "Albert Einstein" },
        { text: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
        { text: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
        { text: "Success is how high you bounce when you hit bottom.", author: "George S. Patton" },
        { text: "Everything you can imagine is real.", author: "Pablo Picasso" },
        { text: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
        { text: "The road to success and the road to failure are almost exactly the same.", author: "Colin R. Davis" },
        { text: "Don’t wait for opportunity. Create it.", author: "Unknown" },
        { text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
        { text: "Success seems to be connected with action. Successful people keep moving. They make mistakes, but they don’t quit.", author: "Conrad Hilton" },
        { text: "Every strike brings me closer to the next home run.", author: "Babe Ruth" },
        { text: "Life isn’t about finding yourself. It’s about creating yourself.", author: "George Bernard Shaw" },
        { text: "The man who has confidence in himself gains the confidence of others.", author: "Hasidic Proverb" },
        { text: "Life is not about waiting for the storm to pass, it’s about learning to dance in the rain.", author: "Vivian Greene" },
        { text: "You don’t have to be great to start, but you have to start to be great.", author: "Zig Ziglar" },
        { text: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
        { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
        { text: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
        { text: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" },
        { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
        { text: "If you want to live a happy life, tie it to a goal, not to people or things.", author: "Albert Einstein" },
        { text: "The biggest adventure you can take is to live the life of your dreams.", author: "Oprah Winfrey" },
        { text: "Success doesn’t come from what you do occasionally, it comes from what you do consistently.", author: "Marie Forleo" },
        { text: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
        { text: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi" },
        { text: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Unknown" },
        { text: "Nothing is impossible. The word itself says 'I’m possible!'", author: "Audrey Hepburn" },
        { text: "Your limitation—it's only your imagination.", author: "Unknown" },
        { text: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
        { text: "Great things never come from comfort zones.", author: "Unknown" },
        { text: "Dream it. Wish it. Do it.", author: "Unknown" },
        { text: "Success doesn’t just find you. You have to go out and get it.", author: "Unknown" },
        { text: "The key to success is to focus on goals, not obstacles.", author: "Unknown" },
        { text: "Dream it. Believe it. Build it.", author: "Unknown" },
        { text: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Unknown" },
        { text: "Don’t stop when you’re tired. Stop when you’re done.", author: "Unknown" },
        { text: "Wake up with determination. Go to bed with satisfaction.", author: "Unknown" },
        { text: "Do something today that your future self will thank you for.", author: "Unknown" },
        { text: "Little things make big days.", author: "Unknown" },
        { text: "It’s going to be hard, but hard does not mean impossible.", author: "Unknown" },
        { text: "Don’t wait for opportunity. Create it.", author: "Unknown" },
        { text: "The key to success is to focus on goals, not obstacles.", author: "Unknown" }    
];

// Function to generate a random quote and fetch a related image
function generateQuote() {
    // Pick a random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const quoteText = randomQuote.text;
    const author = randomQuote.author || "Unknown";

    // Flickr API URL to search for images related to the author
    const searchUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${encodeURIComponent(author)}&format=json&nojsoncallback=1`;

    // Fetch image from Flickr
    fetch(searchUrl)
        .then(response => response.json())
        .then(data => {
            const photos = data.photos.photo;
            const imageUrl = photos.length > 0 
                ? `https://farm${photos[0].farm}.staticflickr.com/${photos[0].server}/${photos[0].id}_${photos[0].secret}.jpg`
                : 'https://via.placeholder.com/150';  // Fallback image if no result

            // Update the content on the webpage (Quote, Author, and Image)
            document.getElementById("quoteText").textContent = `"${quoteText}"`;
            document.getElementById("authorName").textContent = `— ${author}`;
            document.getElementById("authorImage").src = imageUrl;
        })
        .catch(error => {
            console.error('Error fetching image:', error);
            // Display fallback image if error occurs
            const fallbackImage = 'https://via.placeholder.com/150';
            document.getElementById("authorImage").src = fallbackImage;
            document.getElementById("quoteText").textContent = `"${quoteText}"`;
            document.getElementById("authorName").textContent = `— ${author}`;
        });
}

// Event listener for the button to generate a new quote when clicked
document.getElementById("generateButton").addEventListener("click", generateQuote);
