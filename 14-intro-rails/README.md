## Intro to Rails

### Overview














* Encountering Rails - The Big Picture
  * Comfortable reading -> Pattern Following -> Comfortable Writing
    * A natural progression for most programming concepts.
    * "I know what this is supposed to do" ->
      "I can make this happen somehow" ->
      "I know precisely what is needed, when to use it, and why" ->
      (More layers of why)
  * Need a Tutorial to build -> Need to reference -> Code from Memory
    * Ruby things you need to be able to do without a reference:
      * Arrays, Hashes, Classes, Methods, Design
    * Ruby things for which a reference is appropriate:
      * Remembering the inject or any? method
    * Rails things you need to be able to do without a reference:
      * Know what a model, view, controller is for
      * Know where those pieces live
      * Basic active record querying
    * Rails things for which a reference is appropriate:
      * Almost everything else
  * Rails is _Extremely Big_. You also won't use over half of it.

* Why is Rails important?
  * Extremely productive vs competition circa '06.
  * Still in wide use among both large Cos and startups.
  * Important philosophy: Convention over Configuration.

* CuteRates
  * rails new my-app
  * discuss Project Layout
  * add a model with a name, image, likes
  * build out some restful routes
  * point out differences in routing+controllers
    * different locations (config/routes and app/controllers)
    * "resource-style" or "sinatra-style"
  * mention rails g while discouraging long-term
  * implicit rendering? :facepalm:    
  * commands are "under" rails now
    * rails (c)onsole
    * rails (s)erve
    * rails (g)enerate
    * rails routes
    * rails db:migrate
    * etc
