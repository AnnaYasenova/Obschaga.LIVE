var stage;
var player = {};
var outputs = {};
var visited = {};

var page;
var text;
var paragraph;

start_show_progress_tages = ["chapter_1_start", "chapter_2_start"];

function goto(id, language='ukr') {

    // Switch stage
    stage = data[id];

    if (!stage) {
        alert('Missing stage');
        return;
    }

    if(start_show_progress_tages.includes(id)){ //(id == 'chapter_1_start' || id == 'chapter_2_start'){
        eval(stage.action);
        updateProgress();
    }

    breaks(stage.start || 'paragraph')

    // Add description
    write(text_stage[id][language]);//stage.text);


    update(id, language);

    breaks(stage.end || 'none');

    visited[id] = true;
}

// Update choices
function update(id, language) {
    choices.innerHTML = "";

    // Add choices
    for (var i in choice_description[id]) { //stage.choices) {
        var choice = choice_description[id][i]; //[i];

        // Test condition if it has one
        if (choice.condition && !eval(choice.condition))
            continue;

        // Write "description" if has one
        write(choice.description);

        // Add button
        var control = document.createElement('button');
        control.innerText = prepossess(choice.text[language]);
        control.onclick = (function (choice) {
            return function () {
                // Write "prompt"
                if (choice.prompt) {
                    breaks('paragraph');
                    write(choice.prompt[language]);
                }
                // Execute "action"
                if (choice.action) {
                    eval(choice.action);
                    updateProgress();
                }
                // Goto stage / update
                var s = data[id].stage;//choice.stage || stage.stage;
                if (s)
                    goto(s);
                else
                    update(id, language); // TODO: Fix description refresh
            }
        })(choice);
        choices.appendChild(control);
    }
}

// Print text to paragraph
function write(t) {
    if (!t)
        return;

    var out;

    if (!outputs[t])
        outputs[t] = 0;
    if (typeof t == 'object') { // Array
        if (outputs[t] < t.length)
            out = t[outputs[t]];
        else
            out = t[t.length - 1];
    } else {
        out = t;
    }
    outputs[t]++;

    text += prepossess(out);
    paragraph.innerHTML = text;
}

function breaks(t) {
    switch (t) {
        case "none":
            break;
        case "page":
            page = document.createElement('div');
            story.appendChild(page);
            page.classList.add('page');
        case "paragraph":
            paragraph = document.createElement('p');
            page.appendChild(paragraph);
            text = "";
            break;
        default:
            break;
    }
}

function prepossess(t) {
    var start, end;
    while ((start = t.indexOf('{')) !== -1) {
        end = t.indexOf('}', start);
        t = t.substring(0, start) + eval(t.substring(start + 1, end)) + t.substring(end + 1);
    }
    return t;
}