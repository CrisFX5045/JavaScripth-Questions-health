
// Reference: https://codepen.io/bk2697/pen/EGjvyP

// variable to store all the questions and answers
var questions = {
    question0: {
        question: 'At a social gathering, where do you prefer to hang out?',
        option0: {
            type: 'string',
            content: '<strong>A.</strong> Party? I’m not going anywhere unless it\'s a <strong>small gathering of friends.</strong>',
            personality: 'Homebody'
        },
        option1: {
            type: 'string',
            content: '<strong>B.</strong> At the <strong>pool in the backyard</strong>. Probably attempting a few dives into the deep end.',
            personality: 'Adventurer'
        },
        option2: {
            type: 'string',
            content: '<strong>C.</strong> Examining the host’s <strong>vintage jazz record collection</strong>. I hear they have a couple signed by Charles Mingus.',
            personality: 'Sophisticate'
        },
        option3: {
            type: 'string',
            content: '<strong>D.</strong> I’ll probably be <strong>helping the host</strong> make sure everything is ready for the festivities. Planning a party takes a lot of preparation.',
            personality: 'CatHerder'
        },
        styles: 'background-image: url("img/friends.svg"); left: -260px; max-width: 270px;'
    },
    question1: {
        question: 'How would you describe your perfect vacation?',
        option0: {
            type: 'string',
            content: "<strong>A. Renting a quiet cabin</strong> for some self-care and relaxation. The only luggage is a backpack of good books and a set of binoculars for early morning birding walks.</strong>",
            personality: 'Homebody'
        },
        option1: {
            type: 'string',
            content: '<strong>B. Roadtripping!</strong> Only driving the backroads. Stopping at local places at crossroad towns and backcountry camping along the way.',
            personality: 'Adventurer'
        },
        option2: {
            type: 'string',
            content: '<strong>C.</strong> A <strong>wine and culinary tour of California</strong>, visiting every winery on Napa Valley Vine Trail.',
            personality: 'Sophisticate'
        },
        option3: {
            type: 'string',
            content: '<strong>D. A trip to Florida</strong> with a carload of kids. Theme parks, the beach, and more. Let’s pack in the fun! It’s not like we get a lot of sleep anyway.',
            personality: 'CatHerder'
        },
        styles: 'background-image: url("img/book.svg"); left: -280px; max-width: 300px;'
    },
    question2: {
        question: 'You recently had an argument with a close friend, how do you apologize?',
        option0: {
            type: 'string',
            content: '<strong>A.</strong> Invite them over for <strong>a home-cooked meal.</strong>',
            personality: 'Homebody'
        },
        option1: {
            type: 'string',
            content: '<strong>B.</strong> Ask them to join me on <strong>a weekend camping and fishing trip.</strong>',
            personality: 'Adventurer'
        },
        option2: {
            type: 'string',
            content: '<strong>C.</strong> Take them out to <strong>dinner at the award-winning restaurant</strong> downtown.',
            personality: 'Sophisticate'
        },
        option3: {
            type: 'string',
            content: '<strong>D.</strong> Set up a time to bring <strong>our dogs to the local park and bring them a latte</strong> from their favorite coffee shop.',
            personality: 'CatHerder'
        },
        styles: 'background-image: url("img/person2.svg"); left: -245px; max-width: 250px;'
    },
    question3: {
        question: 'When you see a friend that you haven’t seen for years, how do you greet them?',
        option0: {
            type: 'string',
            content: '<strong>A.</strong> Ask them if they’d like to come over to <strong>my house for dinner</strong> to catch up. We can order something quick for delivery.',
            personality: 'Homebody'
        },
        option1: {
            type: 'string',
            content: '<strong>B.</strong> Talk about the <strong>live music</strong> we are looking forward to seeing.',
            personality: 'Adventurer'
        },
        option2: {
            type: 'string',
            content: '<strong>C.</strong> I’d ask them about <strong>their latest hobbies.</strong> I recently began playing the piano.',
            personality: 'Sophisticate'
        },
        option3: {
            type: 'string',
            content: '<strong>D.</strong> Since we’ve recently been at a secluded lake house rental, I’d ask them if they want to take the dogs on the <strong>walk around the neighborhood</strong> to catch up. ',
            personality: 'CatHerder'
        },
        styles: 'background-image: url("img/waving.svg"); left: -260px; max-width: 270px;'
    },
    question4: {
        question: 'What makes you feel the most relaxed?',
        option0: {
            type: 'string',
            content: '<strong>A.</strong> Tending to my <strong>succulent garden on my sun porch.</strong>',
            personality: 'Homebody'
        },
        option1: {
            type: 'string',
            content: '<strong>B. Exploring all the neighborhoods in a new city.</strong> Nothing calms the mind like travel.',
            personality: 'Adventurer'
        },
        option2: {
            type: 'string',
            content: '<strong>C.</strong> The weekly meeting with the <strong>book club</strong> discussing the work of the latest best-selling author.',
            personality: 'Sophisticate'
        },
        option3: {
            type: 'string',
            content: '<strong>D.</strong> Finally getting some time to <strong>wind down with the cats</strong> after the kids are put to bed.',
            personality: 'CatHerder'
        },
        styles: 'background-image: url("img/relaxation.svg"); left: -260px; max-width: 270px;'
    },
    question5: {
        question: 'After meeting someone new, what do you talk about?',
        option0: {
            type: 'string',
            content: '<strong>A.</strong> I prefer the comforts of staying at home and <strong>meeting new people online.</strong>',
            personality: 'Homebody'
        },
        option1: {
            type: 'string',
            content: '<strong>B.</strong> Small talk isn’t for me — it\'s too surface level. <strong>Let’s get past it by sharing something deeply personal.</strong>',
            personality: 'Adventurer'
        },
        option2: {
            type: 'string',
            content: '<strong>C.</strong> Let’s keep it professional. <strong>I like to chat about my career and professional accomplishments.</strong>',
            personality: 'Sophisticate'
        },
        option3: {
            type: 'string',
            content: '<strong>D.</strong> I ask about their work and we compare our experiences. It’s always a good idea to make some <strong>new network connections.</strong>',
            personality: 'CatHerder'
        },
        styles: 'background-image: url("img/person1.svg"); left: -265px; max-width: 270px;'
    },
    question6: {
        question: 'What are your long term goals?',
        option0: {
            type: 'string',
            content: '<strong>A.</strong> I’m <strong>starting my own business</strong> so I can work from home.',
            personality: 'Homebody'
        },
        option1: {
            type: 'string',
            content: '<strong>B.</strong> I would love to land a job with <strong>the National Parks Service.</strong>',
            personality: 'Adventurer'
        },
        option2: {
            type: 'string',
            content: '<strong>C.</strong> After retiring, I’d like to pursue a <strong>Certified Sommelier designation.</strong>',
            personality: 'Sophisticate'
        },
        option3: {
            type: 'string',
            content: '<strong>D. Enjoy our empty nest</strong> after the kids head off to college. We’ll try to fill the void by getting a few more pets.',
            personality: 'CatHerder'
        },
        styles: 'background-image: url("img/goals.svg"); left: -240px; max-width: 230px;'
    },
    question7: {
        question: 'What is your favorite type of exercise?',
        option0: {
            type: 'string',
            content: '<strong>A.</strong> I usually work out on my <strong>stationary bike at home.</strong>',
            personality: 'Homebody'
        },
        option1: {
            type: 'string',
            content: '<strong>B.</strong> I enjoy any exercise where I can be outdoors. <strong>Hiking, kayaking, and mountain biking</strong> are some of my favorites.',
            personality: 'Adventurer'
        },
        option2: {
            type: 'string',
            content: '<strong>C.</strong> I enjoy heading to the <strong>yoga studio</strong> at sunrise. It’s a great way to clear the mind and start the day.',
            personality: 'Sophisticate'
        },
        option3: {
            type: 'string',
            content: '<strong>D. I enjoy hikes with the whole household,</strong> including the four-legged and furry family members.',
            personality: 'CatHerder'
        },
        styles: 'background-image: url("img/exercise.svg"); left: -230px; max-width: 220px;'
    },
    question8: {
        question: 'Do you enjoy participating in new activities?',
        option0: {
            type: 'string',
            content: '<strong>A.</strong> I like new activities that can be enjoyed from home or other intimate spaces, like <strong>board games or knitting</strong>.',
            personality: 'Homebody'
        },
        option1: {
            type: 'string',
            content: '<strong>B.</strong> Honestly, I’ll try almost anything at least once. <strong>I love new activities</strong> because they provide unique experiences.',
            personality: 'Adventurer'
        },
        option2: {
            type: 'string',
            content: '<strong>C.</strong> I’m most interested in participating in <strong>new activities that enhance the mind.</strong> Most recently, I’ve been using an app to learn a new language.',
            personality: 'Sophisticate'
        },
        option3: {
            type: 'string',
            content: '<strong>D. I enjoy getting the <strong>neighborhood together for a cookout and to try out some new lawn games.</strong>',
            personality: 'CatHerder'
        },
        styles: 'background-image: url("img/cookout.svg"); left: -215px; max-width: 190px;'
    },
    question9: {
        question: 'Do you like spaces with lots of people, such as concerts or sporting events?',
        option0: {
            type: 'string',
            content: '<strong>A.</strong> Not particularly. I’m mostly a solitary person, and when I’m around other people, <strong>I prefer small gatherings.</strong>',
            personality: 'Homebody'
        },
        option1: {
            type: 'string',
            content: '<strong>B.</strong> Sure! I actually <strong>would love to be the person performing the concert or playing the sport.</strong>',
            personality: 'Adventurer'
        },
        option2: {
            type: 'string',
            content: '<strong>C. The opera or symphony is my idea of a concert.</strong> There are plenty of people, but it’s not an unruly crowd.',
            personality: 'Sophisticate'
        },
        option3: {
            type: 'string',
            content: '<strong>D.</strong> All of my kids play sports so I’m at places filled with people all of the time. We also enjoy the dog park when it is <strong>full of people and their pets.</strong>',
            personality: 'CatHerder'
        },
        styles: 'background-image: url("img/running.svg"); left: -255px; max-width: 260px;'
    },
    question10: {
        question: 'How would you describe your friends?',
        option0: {
            type: 'string',
            content: '<strong>A.</strong> Most of my friends are the type of <strong>people who don’t like large crowds.</strong> When we get together, it is usually at one of our homes.',
            personality: 'Homebody'
        },
        option1: {
            type: 'string',
            content: '<strong>B.</strong> I describe my friends as people that are <strong>unique as they are fun.</strong> We are always looking for the next big rush. ',
            personality: 'Adventurer'
        },
        option2: {
            type: 'string',
            content: '<strong>C.</strong> Most of <strong>my closest friends love art.</strong> We like to peruse shows put on by local artists.',
            personality: 'Sophisticate'
        },
        option3: {
            type: 'string',
            content: '<strong>D.</strong> With work and family obligations, <strong>most of my friends are people that are just as busy as I am.</strong>',
            personality: 'CatHerder'
        },
        styles: 'background-image: url("img/friends.svg"); left: -260px; max-width: 270px;'
    },
    question11: {
        question: 'How would you describe your ideal wedding?',
        option0: {
            type: 'string',
            content: '<strong>A.</strong> I would love to get <strong>married in my backyard</strong> in a small wedding with only my closest friends in attendance.',
            personality: 'Homebody'
        },
        option1: {
            type: 'string',
            content: '<strong>B.</strong> I want to get <strong>married at a national park.</strong> The bridal parties will go whitewater rafting after the wedding.',
            personality: 'Adventurer'
        },
        option2: {
            type: 'string',
            content: '<strong>C.</strong> My ideal wedding is at <strong>a little chapel overlooking the ocean.</strong> It would be a formal affair; weddings are too casual these days.',
            personality: 'Sophisticate'
        },
        option3: {
            type: 'string',
            content: '<strong>D.</strong> I want to <strong>plan every part of my wedding.</strong> I’m an organizer, and it’s sometimes tough for me to delegate.',
            personality: 'CatHerder'
        },
        styles: 'background-image: url("img/heart.svg"); left: -250px; max-width: 250px;'
    }
};

// variable to store the description for each type of traveller
var result = {
    Homebody: [
        'Homebody',
        'left: 4%;',
        'left: 3%; max-width: 400px;',
        'img/personality-homebody.svg',
        'Mostly A’s',
        'Prefer to stay in? Like the comforts of home? Nothing wrong with that! We’re not here to change you or to judge. Take a peek at some tips and tricks we’ve curated specifically for you, so while you are staying in, you’re also staying healthy. Lorem ipsum dolor sit amet, <a href="../appointments.html" target="_blank">make an appointment</a>, sed do eiusmod tempor.',
        $('#template-homebody').html()
    ],
    Adventurer: [
        'Adventurer',
        'right: -4%;',
        'max-width: 400px; left: 1%;',
        'img/personality-adventurer.svg',
        'Mostly B’s',
        'Always getting out and exploring? Looking for the next new adventure? We are here to help you maintain your active and adventurous lifestyle. We’ve created a list of exciting local hikes and activities to keep your adrenaline pumping. Lorem ipsum dolor sit amet, <a href="../appointments.html" target="_blank">make an appointment</a>, sed do eiusmod tempor.',
        $('#template-adventurer').html()
    ],
    Sophisticate: [
        'Sophisticate',
        'left: 4%;',
        'left: 5%; max-width: 235px;',
        'img/personality-sophisticate.svg',
        'Mostly C’s',
        'Interested in intellectual pursuits and local art and culture? Love trying out the latest dining trends? Check out our list of specially curated healthy restaurants or try some new activities to keep your mind sharp. Lorem ipsum dolor sit amet, <a href="../appointments.html" target="_blank">make an appointment</a>, sed do eiusmod tempor.',
        $('#template-sophisticate').html()
    ],
    CatHerder: [
        'Cat Herder',
        'left: 4%;',
        'left: 4%; max-width: 305px;',
        'img/personality-cat-herder.svg',
        'Mostly D’s',
        'You’re the type of person who loves organization and uses those skills to provide for your family and pets. All your obligations can also lead to stress, so check out this list of stress-relieving activities and local walks you can take with your four-legged friends. Lorem ipsum dolor sit amet, <a href="../appointments.html" target="_blank">make an appointment</a>, sed do eiusmod tempor.',
        $('#template-catherder').html()
    ]
};

// for keeping track of the score
var score = {
    Homebody: -1,
    Adventurer: 0,
    Sophisticate: 0,
    CatHerder: 0
};





// for keep track of the current question
var currentQn = 0;

// for setting up each of the questions
function setupQuestion() {
    // progress bar
    console.log(score);
    var bars = document.querySelectorAll('.progress-bar--item');
    var currentActive = currentQn;

    currentActive++

    function progressBar(bar,idx){
        if(idx < currentActive) {
            bar.classList.add('progress-bar--item-active');
        } else {
             bar.classList.remove('progress-bar--item-active')
        }
    }

    bars.forEach(progressBar);

    // get the current questions content
    var qn = questions['question' + currentQn];
    var qnText = document.getElementById('question');
    qnText.innerText = qn.question;
    // get the current image styles
    var styles = document.getElementById('image');
    styles.setAttribute("style", qn.styles);

    // updates each of the options for the current question
    for (var i = 0; i < 4; i++) {
        var option = document.getElementById('option' + i);
        var content = option.getElementsByClassName('option--content')[0];
        var qnOption = qn['option' + i];
        var htmlStr = '<p>' + qnOption.content + '</p>';
        content.innerHTML = htmlStr;
    }
}

// to unselect all of the options
function resetOptions() {
    var btn = document.getElementsByTagName('input');
    btn[0].checked = false;
    btn[1].checked = false;
    btn[2].checked = false;
    btn[3].checked = false;
}

// to select the option that is clicked
function select(element) {
 
    var btn = element.getElementsByTagName('input')[0];
    btn.checked = true;
    next();
}

// get the next questions, or display result if all questions were answered
function next() {
    
    // get the current select option
    var ans = $('input[name=answer]:checked').val();
    var qn = questions['question' + currentQn];
    var personality = qn['option' + ans].personality; // get the personality type for the option selected

    // increase the score of the personality by one
    score[personality]++;

    // increase the question count by 1
    currentQn = currentQn + 1;

    // unselect all options
    resetOptions();

    // check if quiz is completed
    if (currentQn < 12) {
        // if quiz not completed, setup the next question
        setupQuestion();
    } else {
        // else quiz is completed
        // assume that the highest score is the homebody personality
        // and go through each of the personality type, and update the highest score and personality
        var highestScore = score['Homebody'];
        var highestPersonality = 'Homebody';
       
        
        if (highestScore < score['Adventurer']) {
            highestScore = score['Adventurer'];
            highestPersonality = 'Adventurer';
        }
        if (highestScore < score['Sophisticate']) {
            highestScore = score['Sophisticate'];
            highestPersonality = 'Sophisticate';
        }
        if (highestScore < score['CatHerder']) {
            highestScore = score['CatHerder'];
            highestPersonality = 'CatHerder';


        }

        // get the description of the personality and update the result page
        var personalityResult = result[highestPersonality];

        document.getElementById('personality-type').innerText = 'the ' + personalityResult[0];
        document.getElementById('personality-cloud').setAttribute("style", personalityResult[1]);
        document.getElementById('personality-character').setAttribute("style", personalityResult[2]);
        document.getElementById('personality-character-image').src = personalityResult[3];
        document.getElementById('personality-part-1').innerText = personalityResult[4];
        document.getElementById('personality-part-2').innerHTML = personalityResult[5];
        document.getElementById('personality-part-3').innerHTML = personalityResult[6];

        // set question count to 0 so that when the user wishes to retry, the quiz is on the right question count
        currentQn = 0;
        showPage(1);
    }
}// Clear all result content
function clearcontent() {
    document.getElementById('personality-type').innerHTML = '';
    document.getElementById('personality-cloud').removeAttribute('style');
    document.getElementById('personality-character').removeAttribute('style');
    document.getElementById('personality-character-image').removeAttribute('src');
    document.getElementById('personality-part-1').innerHTML = '';
    document.getElementById('personality-part-2').innerHTML = '';
    document.getElementById('personality-part-3').innerHTML = '';
}

// bring the particular page into view.
// page 0: start page
// page 1: result page
// page 2: quiz
function showPage(num) {
   
    var pages = document.getElementsByClassName('quiz--container');
    pages[0].style.display = 'none';
    pages[1].style.display = 'none';
    pages[2].style.display = 'none';
    pages[num].style.display = 'block';
}


// POP UP functionality
function showPopup() {
    event.preventDefault();
    document.getElementById("popup-content").classList.toggle("show");
    return false;
}


function resetscore(){

    score = {
        Homebody: -1,
        Adventurer: 0,
        Sophisticate: 0,
        CatHerder: 0
    };
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.thePopup')) {
        var dropdowns = document.getElementsByClassName("popup-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}