## Morning!

Welcome back.



## Objectives

* Learn the difference between class methods and instance methods
* Learn how and when to use class variables
* Practice with attr_accessor
* Know how to maintain a "single source of truth"
* Know how to model a many-to-many relationship






## Recap

Last time we:
* We built a simple model of Trainers and Pokemon.
* We used instance variables, attr_readers, attr_writers to manage data.
* We practiced using self to refer to the object running the current method.
* We had a run file load our classes, make instances, and interact with them.

## Today

Cool! Today we're going to review some nuanced points:
* Refactor our attr_reader and attr_writer on Pokemon into attr_accessor.
* Talk about why we used a local variable and self in Trainer#fight.
  * 1. Method arguments are always variables with local scope.
     And we can't access instance vars in another object without a reader!
  * 2. If we don't say self, ruby looks for a local var, then a method.
     I often write "self." for the added explicitness. Readability matters!

Fix some bugs by switching to single source of truth:
* Just choose one of trainer and pokemon to know about the relationship.
* Uh oh, we might need a way to find all the instances of pokemon!

Add the ability for tez to become the best "like no one ever was"...
By collecting badges!
* This is our first many-to-many relationship.
* Gym can be conquered by many trainers.
* Trainer can conquer many gyms.
* Add a Gym class with: gymleader, location, kind
  * a victors method to show the trainers that have defeated it
  * Ahhh, this seems really hard to do with single source of truth. :-/


Since we want our single source of truth to be a single reference
(like a pokemon belongs to trainer), we would prefer to avoid a Trainer
having an array of gyms or a Gym having an array of Trainers. So...
* Add a Badge class with: a title, a gym, and a trainer
  * Now each badge captures a single time that a trainer defeated a gym.
  * This also is a close analog of how relational databases manage SSOT.
