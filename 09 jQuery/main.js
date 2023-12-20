// --------------- working with jQuery ---------------

// syntax: $(selector).method(params);

// ------- do something with elements
$('ol.product-list li:nth-child(3)').addClass('selected');

// .first() .last() .eq(index) .lt(index) .gt(index)
const $list = $('ol.product-list');

$list.children().eq(4).addClass('selected');
$list.children().last().attr('title', 'I`m the last item!');
$list.attr('data-order', "1");

// collection.each((index, element) => { code })
$('ol.product-list li').each(function (ind, el) {

    // $(HTMLElement).methods...

    if (ind % 3 === 0)
        console.log(ind + ': ' + $(el).text()); // el.textContent
});

// get element data: .text() .html() .val() 

console.log('Text:', $list.children().eq(2).text()); // textContent
console.log('HTML:', $list.children().eq(2).html()); // innerHTML
//$list.children().eq(2).text("Changed text content!"); // textContent = "..."

// ------- event handlers
// $(selector).on('event_name', handler);
// events: 'click' 'dblclick' 'mouseenter' 'mouseleave'

const $listItems = $('ol.product-list li');

$listItems.on('click', function () {

    // this - reference to the current event target object
    console.log(this.textContent);

    // working with CSS: .addClass() .removeClass() .toggleClass()
    $(this).toggleClass('selected');
});

//$listItems.off('click', funcName);  // remove funcName function handler
//$listItems.off('click');            // remove all event handlers

// ------- the same without jQuery
// Array.from(document.querySelectorAll('ol.product-list li')).forEach(i => {
//     i.addEventListener('click', function() {
//         this.classList.toggle('selected');
//     });
// })

// get subling elements: .parent() .prev() .next() .even() .odd()
$listItems.on('mouseenter', function () {

    $(this).addClass('medium-text');

    $(this).prev().addClass('muted-text');
    $(this).next().addClass('muted-text');
});
$listItems.on('mouseleave', function () {

    $(this).removeClass('medium-text');

    $(this).prev().removeClass('muted-text');
    $(this).next().removeClass('muted-text');
});

// ------- forms
$('#product-form').submit(function (e) {

    const value = $('#product-form input[name=name]').val();
    console.log(`Name: ${value}`);

    // change content: append() prepend() before() after() empty() remove()
    $list.append(`<li>${value}</li>`);

    return false; // instead of e.preventDefault();
});
