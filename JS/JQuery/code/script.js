// $("h1").css("color", "red");

// console.log($("button"));

// $("h1").addClass("test font");
// $("h1").removeClass("test");

// console.log($("h1").hasClass("font"));

// $("button").text("Don't Click Me!");

// $("button").html("<i>Hey!</i>");

// console.log($("img").attr("src", "https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp"));

// $("img").click(() => {
//     $("h1").css("color", "red");
// });

// $("button").click(() => {
//     $("h1").css("color", "red");
//     setInterval(() => {
//         $("h1").css("color", "black");
//     }, 500);
// });

// $("input").keypress( (event) => {
//     $("h1").text(event.key);
// });

// $(document).keypress((event) => {
//     $("h1").text(event.key);
// });

// $("h1").on("mouseover", () => {
//     $("h1").css("color", "red");
// });
// $("h1").on("mouseout", () => {
//     $("h1").css("color", "black");
// });

// $(".box").before("<h2>hello</h2>");
// $(".box").after("<h2>Good Bye!</h2>");
// $(".box").prepend("<p>first Child</p>");
// $(".box").append("<p>second child</p>");

// $(".box").css("border", "2px solid");

// $(document).on("click", () => {
//     $("h1").toggle();
// });

// $(document).on("click", () => {
//     $("h1").fadeToggle();
// });

// $(document).on("click", () => {
//     $("h1").slideToggle();
// });

$(document).on("click", () => {
    $("h1").slideUp().slideDown().animate({opacity : "50%"});
});