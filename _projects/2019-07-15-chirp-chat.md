---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Chirp: Geo-Aware Chat app for Android with Automatic Translation Support"
summary: ""
authors: []
tags: []
categories: []
date: 2019-07-15T18:00:02+05:30

# Optional external URL for project (replaces project detail page).
external_link: ""

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
# links:
# - name: Follow
#   url: https://twitter.com
#   icon_pack: fab
#   icon: twitter

url_code: ""
url_pdf: ""
url_slides: ""
url_video: ""

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides: ""
---

Assume that you have visited to some tourist place and you are hungry. Basically you want to find some good hotel to have lunch. You can use some existing apps but what if the checked-in hotel is no longer there? Or you want to find someone from your place? Location-aware chat i.e, chatting with someone in your proximity comes in handy for you.

**Chirp is a location-aware chat that allows you to chat with someone in your proximity.**


## Stage 1:
This project was developed as part of a course project during my *Masters* in IISc. A brief description about the app can be found here:

In this project, we have developed a location based chat application developed for Android OS users, allowing the user to see other users in the user's neighbourhood and setup an instant chat with one or more such proximal users. We use Location Manager APIs for retrieving GPS co-ordinates and Java XMPP based server and client side APIs for authentication, session and log maintenance. The platform is scalable with respect to number of users and has certain built-in security measures.


## Stage 2:
I had extended this project to include automatic translation support during my first year of PhD. This again was developed as part of a course work. The user can set his native language preference. Depending on the native language set the received text would be automatically converted to the user's native language if already not. In this particular project we had showed the utility between a Telugu and Gujarati native speaker trying to communicate with each other. We trained Moses toolkit on the parallel corpus to obtain a Translation system between Gujarati and Telugu.

~                                                                                                                                                                    
