console.log("HELP");
$(function(){
  $("#git_photo").on({ mouseenter: function(){
    $(this).attr('src','img/open.png');
  },
  mouseleave: function(){
    $(this).attr('src','img/close.png');
  }
  });



  $("#bash_photo").on({ mouseenter: function(){
    $(this).attr('src','img/open.png');
  },
  mouseleave: function(){
    $(this).attr('src','img/close.png');
  }
  });
  


  $("#github_photo").on({ mouseenter: function(){
    $(this).attr('src','img/open.png');
  },
  mouseleave: function(){
    $(this).attr('src','img/close.png');
  }
  });
});
