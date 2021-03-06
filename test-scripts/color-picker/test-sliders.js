var SLIDER_BASE_CLASS = 'color-picker-slider-base', SLIDER_CLASS = 'color-picker-slider';

var test_2_d_slider_0_1_0_1 = function()
{
  var test = 
  ['div',
    [
      'div',  
      'style', 'position:relative; width:140px; height:140px; background-color:#0f0'
    ],
    ['p',
      ['label', 'x, 0 - 1: ', 
        ['input', 
          'type', 'number',
          'step', '0.01',
          'oninput', function(){slider.x = parseFloat(this.value)}
        ]
      ]
    ],
    ['p',
      ['label', 'y, 0 - 1: ', 
        ['input', 
          'type', 'number',
          'step', '0.01',
          'oninput', function(){slider.y = parseFloat(this.value)}
        ]
      ]
    ],
    'class', 'test'
  ];
  var container = document.documentElement.render(test);
  var slider_config =
  {
    container: container.firstElementChild,
    slider_base_class: SLIDER_BASE_CLASS,
    slider_class: 'color-picker-pointer',
    slider_template: window.templates.svg_slider_circle(),
    onxy: function(x, y)
    {
      container.getElementsByTagName('input')[0].value =  x.toFixed(3);
      container.getElementsByTagName('input')[1].value =  y.toFixed(3);
    },
    min_x: 0,
    max_x: 1,
    min_y: 0,
    max_y: 1
  }
  var slider = new Slider(slider_config);
};

var test_2_d_slider_0_1_1_0 = function()
{
  var test = 
  ['div',
    [
      'div',  
      'style', 'position:relative; width:140px; height:140px; background-color:#0f0'
    ],
    ['p',
      ['label', 'x, 0 - 1: ', 
        ['input', 
          'type', 'number',
          'step', '0.01',
          'oninput', function(){slider.x = parseFloat(this.value)}
        ]
      ]
    ],
    ['p',
      ['label', 'y, 1 - 0: ', 
        ['input', 
          'type', 'number',
          'step', '0.01',
          'oninput', function(){slider.y = parseFloat(this.value)}
        ]
      ]
    ],
    'class', 'test'
  ];
  var container = document.documentElement.render(test);
  var slider_config =
  {
    container: container.firstElementChild,
    slider_base_class: SLIDER_BASE_CLASS,
    slider_class: 'color-picker-pointer',
    slider_template: window.templates.svg_slider_circle(),
    onxy: function(x, y)
    {
      container.getElementsByTagName('input')[0].value =  x.toFixed(3);
      container.getElementsByTagName('input')[1].value =  y.toFixed(3);
    },
    min_x: 0,
    max_x: 1,
    min_y: 1,
    max_y: 0
  }
  var slider = new Slider(slider_config);
};

var test_2_d_slider_1_0_1_0 = function()
{
  var test = 
  ['div',
    [
      'div',  
      'style', 'position:relative; width:140px; height:140px; background-color:#0f0'
    ],
    ['p',
      ['label', 'x, 1 - 0: ', 
        ['input', 
          'type', 'number',
          'step', '0.01',
          'oninput', function(){slider.x = parseFloat(this.value)}
        ]
      ]
    ],
    ['p',
      ['label', 'y, 1 - 0: ', 
        ['input', 
          'type', 'number',
          'step', '0.01',
          'oninput', function(){slider.y = parseFloat(this.value)}
        ]
      ]
    ],
    'class', 'test'
  ];
  var container = document.documentElement.render(test);
  var slider_config =
  {
    container: container.firstElementChild,
    slider_base_class: SLIDER_BASE_CLASS,
    slider_class: 'color-picker-pointer',
    slider_template: window.templates.svg_slider_circle(),
    onxy: function(x, y)
    {
      container.getElementsByTagName('input')[0].value =  x.toFixed(3);
      container.getElementsByTagName('input')[1].value =  y.toFixed(3);
    },
    min_x: 1,
    max_x: 0,
    min_y: 1,
    max_y: 0
  }
  var slider = new Slider(slider_config);
};

var test_2_d_slider_1_0_0_1 = function()
{
  var test = 
  ['div',
    [
      'div',  
      'style', 'position:relative; width:140px; height:140px; background-color:#0f0'
    ],
    ['p',
      ['label', 'x, 1 - 0: ', 
        ['input', 
          'type', 'number',
          'step', '0.01',
          'oninput', function(){slider.x = parseFloat(this.value)}
        ]
      ]
    ],
    ['p',
      ['label', 'y, 0 - 1: ', 
        ['input', 
          'type', 'number',
          'step', '0.01',
          'oninput', function(){slider.y = parseFloat(this.value)}
        ]
      ]
    ],
    'class', 'test'
  ];
  var container = document.documentElement.render(test);
  var slider_config =
  {
    container: container.firstElementChild,
    slider_base_class: SLIDER_BASE_CLASS,
    slider_class: 'color-picker-pointer',
    slider_template: window.templates.svg_slider_circle(),
    onxy: function(x, y)
    {
      container.getElementsByTagName('input')[0].value =  x.toFixed(3);
      container.getElementsByTagName('input')[1].value =  y.toFixed(3);
    },
    min_x: 1,
    max_x: 0,
    min_y: 0,
    max_y: 1
  }
  var slider = new Slider(slider_config);
};


var test_x_slider = function()
{
  var test = 
  ['div',
    [
      'div',  
      'style', 'position:relative; width:140px; height:20px; margin-top: 120px; background-color:#0f0'
    ],
    ['p',
      ['label', 'x, 0 - 2: ', 
        ['input', 
          'type', 'number',
          'step', '0.01',
          'oninput', function(){slider.x = parseFloat(this.value)}
        ]
      ]
    ],
    'class', 'test'
  ];
  var container = document.documentElement.render(test);
  var slider_config =
  {
    container: container.firstElementChild,
    slider_base_class: SLIDER_BASE_CLASS,
    slider_class: 'color-picker-slider-rotated',
    slider_template: window.templates.svg_slider_z(true),
    onx: function(x){container.getElementsByTagName('input')[0].value =  x.toFixed(3);},
    min_x: 0,
    max_x: 2,
  }
  var slider = new Slider(slider_config);
}

var test_y_slider = function()
{
  var test = 
  ['div',
    [
      'div',  
      'style', 'position:relative; width:20px; height:140px; background-color:#0f0'
    ],
    ['p',
      ['label', 'y, 0 - 1: ', 
        ['input', 
          'type', 'number',
          'step', '0.01',
          'oninput', function(){slider.y = parseFloat(this.value)}
        ]
      ]
    ],
    'class', 'test'
  ];
  var container = document.documentElement.render(test);
  var slider_config =
  {
    container: container.firstElementChild,
    slider_base_class: SLIDER_BASE_CLASS,
    slider_class: 'color-picker-slider',
    slider_template: window.templates.svg_slider_z(),
    ony: function(y){container.getElementsByTagName('input')[0].value =  y.toFixed(3);},
    min_y: 0,
    max_y: 1
  }
  var slider = new Slider(slider_config);
}

var test_y_slider_2 = function()
{
  var test = 
  ['div',
    [
      'div',  
      'style', 'position:relative; width:20px; height:140px; background-color:#0f0'
    ],
    ['p',
      ['label', 'y, 3 - 15: ', 
        ['input', 
          'type', 'number',
          'step', '0.1',
          'oninput', function(){slider.y = parseFloat(this.value)}
        ]
      ]
    ],
    'class', 'test'
  ];
  var container = document.documentElement.render(test);
  var slider_config =
  {
    container: container.firstElementChild,
    slider_base_class: SLIDER_BASE_CLASS,
    slider_class: 'color-picker-slider',
    slider_template: window.templates.svg_slider_z(),
    ony: function(y){container.getElementsByTagName('input')[0].value =  y.toFixed(1);},
    min_y: 3,
    max_y: 15
  }
  var slider = new Slider(slider_config);
}
var test_y_slider_3 = function()
{
  var test = 
  ['div',
    [
      'div',  
      'style', 'position:relative; width:20px; height:140px; background-color:#0f0'
    ],
    ['p',
      ['label', 'y, 15 - 3: ', 
        ['input', 
          'type', 'number',
          'step', '0.1',
          'oninput', function(){slider.y = parseFloat(this.value)}
        ]
      ]
    ],
    'class', 'test'
  ];
  var container = document.documentElement.render(test);
  var slider_config =
  {
    container: container.firstElementChild,
    slider_base_class: SLIDER_BASE_CLASS,
    slider_class: 'color-picker-slider',
    slider_template: window.templates.svg_slider_z(),
    ony: function(y){container.getElementsByTagName('input')[0].value =  y.toFixed(1);},
    min_y: 15,
    max_y: 3
  }
  var slider = new Slider(slider_config);
}



var test_2_d_slider_3 = function()
{
  var test = 
  ['div',
    [
      'div',  
      'style', 'position:relative; width:280px; height:70px; background-color:#0f0'
    ],
    ['p',
      ['label', 'x, 20 - -7: ', 
        ['input', 
          'type', 'number',
          'step', '1',
          'oninput', function(){slider.x = parseFloat(this.value)}
        ]
      ]
    ],
    ['p',
      ['label', 'y, -50 - 12: ', 
        ['input', 
          'type', 'number',
          'step', '1',
          'oninput', function(){slider.y = parseFloat(this.value)}
        ]
      ]
    ],
    'class', 'test'
  ];
  var container = document.documentElement.render(test);
  var slider_config =
  {
    container: container.firstElementChild,
    slider_base_class: SLIDER_BASE_CLASS,
    slider_class: 'color-picker-pointer',
    slider_template: window.templates.svg_slider_circle(),
    onx: function(x){container.getElementsByTagName('input')[0].value =  x.toFixed(0);},
    ony: function(y){container.getElementsByTagName('input')[1].value =  y.toFixed(0);},
    min_x: 20,
    max_x: -7,
    min_y: -50,
    max_y: 12
  }
  var slider = new Slider(slider_config);
}

var test_2_d_slider_4 = function()
{
  var test = 
  ['div',
    [
      'div',  
      'style', 'position:relative; width:70px; height:280px; background-color:#0f0'
    ],
    ['p',
      ['label', 'x, 20 - -7: ', 
        ['input', 
          'type', 'number',
          'step', '1',
          'oninput', function(){slider.x = parseFloat(this.value)}
        ]
      ]
    ],
    ['p',
      ['label', 'y, -50 - 12: ', 
        ['input', 
          'type', 'number',
          'step', '1',
          'oninput', function(){slider.y = parseFloat(this.value)}
        ]
      ]
    ],
    'class', 'test'
  ];
  var container = document.documentElement.render(test);
  var slider_config =
  {
    container: container.firstElementChild,
    slider_base_class: SLIDER_BASE_CLASS,
    slider_class: 'color-picker-pointer',
    slider_template: window.templates.svg_slider_circle(),
    onx: function(x){container.getElementsByTagName('input')[0].value =  x.toFixed(0);},
    ony: function(y){container.getElementsByTagName('input')[1].value =  y.toFixed(0);},
    min_x: 20,
    max_x: -7,
    min_y: -50,
    max_y: 12
  }
  var slider = new Slider(slider_config);
}

window.onload = function()
{
  test_2_d_slider_0_1_0_1();
  test_2_d_slider_0_1_1_0();
  test_2_d_slider_1_0_1_0();
  test_2_d_slider_1_0_0_1();
  test_y_slider();
  test_x_slider();
  test_y_slider_2();
  test_y_slider_3();
  test_2_d_slider_3();
  test_2_d_slider_4();

};





