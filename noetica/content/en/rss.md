---
type: 'slide'
title: 'Hugo Release News'
---

This is a slide with RSS feed.

{{< rss url="https://gohugo.io/news/index.xml" >}}

## Showcase (Example)

Section with `Pin` shortcode.
The item order is column-based.
If images are not square, the layout will displayed as masonry style.

{{< pin "begin" >}}
{{< pin img="https://raw.githubusercontent.com/foxihd/hugo-et-hd/master/static/svg/flowlines/1.svg" label="Item 1">}}
{{< pin img="https://raw.githubusercontent.com/foxihd/hugo-et-hd/master/static/svg/flowlines/2.svg" label="Item 2">}}
{{< pin img="https://raw.githubusercontent.com/foxihd/hugo-et-hd/master/static/svg/flowlines/3.svg" label="Item 3">}}
{{< pin img="https://raw.githubusercontent.com/foxihd/hugo-et-hd/master/static/svg/flowlines/4.svg" label="Item 4">}}
{{< pin img="https://raw.githubusercontent.com/foxihd/hugo-et-hd/master/static/svg/flowlines/5.svg" label="Item 5">}}
{{< pin img="https://raw.githubusercontent.com/foxihd/hugo-et-hd/master/static/svg/flowlines/6.svg" label="Item 6">}}
{{< pin "end" >}}

## Catalogue (Example)

`Pin` shortcode with `quote` parameter.

{{< pin "begin" >}}
{{< pin img="https://raw.githubusercontent.com/foxihd/hugo-et-hd/master/static/svg/flowlines/7.svg" label="Item 1" url="#my-ecommerce" quote="<s>$2.99</s> $1.99" >}}
{{< pin img="https://raw.githubusercontent.com/foxihd/hugo-et-hd/master/static/svg/flowlines/8.svg" label="Item 2" url="#my-ecommerce" quote="<s>$3.99</s> $2.99" >}}
{{< pin img="https://raw.githubusercontent.com/foxihd/hugo-et-hd/master/static/svg/flowlines/9.svg" label="Item 3" url="#my-ecommerce" quote="Get Quote" >}}
{{< pin img="https://raw.githubusercontent.com/foxihd/hugo-et-hd/master/static/svg/flowlines/10.svg" label="Item 4" url="#my-ecommerce" quote="<s>$2.99</s> $1.99" >}}
{{< pin img="https://raw.githubusercontent.com/foxihd/hugo-et-hd/master/static/svg/flowlines/11.svg" label="Item 5" url="#my-ecommerce" quote="<s>$3.99</s> $2.99" >}}
{{< pin img="https://raw.githubusercontent.com/foxihd/hugo-et-hd/master/static/svg/flowlines/12.svg" label="Item 6" url="#my-ecommerce" quote="<s>$3.99</s> $2.99" >}}
{{< pin "end" >}}
