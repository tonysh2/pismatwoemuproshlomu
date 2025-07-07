<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2575.5">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.6px Menlo; color: #8f9096; -webkit-text-stroke: #8f9096}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.6px Menlo; color: #393939; -webkit-text-stroke: #393939}
    p.p3 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.6px Menlo; color: #42933e; -webkit-text-stroke: #42933e}
    p.p4 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.6px Menlo; color: #2a2c33; -webkit-text-stroke: #2a2c33}
    p.p5 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.6px Menlo; color: #393939; -webkit-text-stroke: #393939; min-height: 15.0px}
    p.p6 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.6px Menlo; color: #325eee; -webkit-text-stroke: #325eee}
    span.s1 {font-kerning: none}
    span.s2 {font-kerning: none; color: #930093; -webkit-text-stroke: 0px #930093}
    span.s3 {font-kerning: none; color: #325eee; -webkit-text-stroke: 0px #325eee}
    span.s4 {font-kerning: none; color: #2a2c33; -webkit-text-stroke: 0px #2a2c33}
    span.s5 {font-kerning: none; color: #393939; -webkit-text-stroke: 0px #393939}
    span.s6 {font-kerning: none; color: #42933e; -webkit-text-stroke: 0px #42933e}
  </style>
</head>
<body>
<p class="p1"><span class="s1"><i>// Список стихов (можно вручную добавить или автоматизировать, если хостинг позволяет)</i><i></i></span></p>
<p class="p2"><span class="s2">const</span><span class="s1"> poems </span><span class="s3">=</span><span class="s1"> </span><span class="s4">[</span></p>
<p class="p3"><span class="s5"><span class="Apple-converted-space">    </span></span><span class="s1">"стихи/стих1.txt"</span><span class="s4">,</span></p>
<p class="p3"><span class="s5"><span class="Apple-converted-space">    </span></span><span class="s1">"стихи/стих2.txt"</span><span class="s4">,</span></p>
<p class="p1"><span class="s5"><span class="Apple-converted-space">    </span></span><span class="s1"><i>// ...</i><i></i></span></p>
<p class="p4"><span class="s1">];</span></p>
<p class="p5"><span class="s1"></span><br></p>
<p class="p6"><span class="s2">async</span><span class="s5"> </span><span class="s2">function</span><span class="s5"> </span><span class="s1">loadRandomPoem</span><span class="s4">()</span><span class="s5"> </span><span class="s4">{</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span></span><span class="s2">const</span><span class="s1"> randomPoemPath </span><span class="s3">=</span><span class="s1"> poems</span><span class="s4">[</span><span class="s1">Math</span><span class="s4">.</span><span class="s3">floor</span><span class="s4">(</span><span class="s1">Math</span><span class="s4">.</span><span class="s3">random</span><span class="s4">()</span><span class="s1"> </span><span class="s3">*</span><span class="s1"> poems</span><span class="s4">.</span><span class="s1">length</span><span class="s4">)];</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span></span><span class="s2">try</span><span class="s1"> </span><span class="s4">{</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">        </span></span><span class="s2">const</span><span class="s1"> response </span><span class="s3">=</span><span class="s1"> </span><span class="s2">await</span><span class="s1"> </span><span class="s3">fetch</span><span class="s4">(</span><span class="s1">randomPoemPath</span><span class="s4">);</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">        </span></span><span class="s2">const</span><span class="s1"> text </span><span class="s3">=</span><span class="s1"> </span><span class="s2">await</span><span class="s1"> response</span><span class="s4">.</span><span class="s3">text</span><span class="s4">();</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">        </span>document</span><span class="s4">.</span><span class="s3">getElementById</span><span class="s4">(</span><span class="s6">"poem"</span><span class="s4">).</span><span class="s1">textContent </span><span class="s3">=</span><span class="s1"> text</span><span class="s4">;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span></span><span class="s4">}</span><span class="s1"> </span><span class="s2">catch</span><span class="s1"> </span><span class="s4">(</span><span class="s1">error</span><span class="s4">)</span><span class="s1"> </span><span class="s4">{</span></p>
<p class="p3"><span class="s5"><span class="Apple-converted-space">        </span>console</span><span class="s4">.</span><span class="s3">error</span><span class="s4">(</span><span class="s1">"Ошибка загрузки стиха:"</span><span class="s4">,</span><span class="s5"> error</span><span class="s4">);</span></p>
<p class="p3"><span class="s5"><span class="Apple-converted-space">        </span>document</span><span class="s4">.</span><span class="s3">getElementById</span><span class="s4">(</span><span class="s1">"poem"</span><span class="s4">).</span><span class="s5">textContent </span><span class="s3">=</span><span class="s5"> </span><span class="s1">"Не удалось загрузить стих :("</span><span class="s4">;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span></span><span class="s4">}</span></p>
<p class="p4"><span class="s1">}</span></p>
<p class="p5"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><i>// Загружаем случайное стихотворение при открытии страницы</i><i></i></span></p>
<p class="p6"><span class="s1">loadRandomPoem</span><span class="s4">();</span></p>
</body>
</html>
