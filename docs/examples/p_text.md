---
layout: default
title: How to use p text
---

# How to use p text
Here's an example code regarding the use of p text: 

```yaml
dashboard "Example": 
  - 
    p text: "Lorem ipsum dolor sit amet"

```
The code above will render a p text that looks like this:

![](../screenshots/p_text.png)

## JSON format
The YAML above is equivalent to this JSON:
```json
{
  "component": "root",
  "args": {
    "title": "Example"
  },
  "data": [
    {
      "component": "text",
      "args": {
        "tagName": "p"
      },
      "data": "Lorem ipsum dolor sit amet"
    }
  ]
}
```
