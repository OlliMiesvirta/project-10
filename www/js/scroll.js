scrollToAnchor = (id) => {
  console.log(id);
  $("html, body").animate(
    {
      scrollTop: $("#" + id).offset().top,
    },
    600
  );
};
