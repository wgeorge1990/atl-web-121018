require 'pry'

### Data

## * input: english language
## * what is the format? what data type? array, strings?
## * dealing with pairs of words. like a lot.
##   * word1, word2
##   * seems like the words should need to have an equal number of letters?

### Tasks

## * read a text file to build an array of strings
## * test a pair of words to see if they're "special"
##   * the last letter of one word should be the first letter of another
##   * the words need to share the same letters - anagrams
##

## Subtasks:
## getting the last letter of a word
## word1.slice(word1.length - 1)
## word1.split("").last
## word1[word1.length - 1]
## word1[-1]
## word[0]
## word1[-1] == word2[0]

def anagrams?(word1, word2)
  word1.split("").sort == word2.split("").sort
end

def have_joiner?(word1, word2)
  word1.reverse[0] == word2[0]
end

def special_pair?(word1, word2)
  return false if word1.length < 4 || word2.length < 4
  anagrams?(word1, word2) && have_joiner?(word1, word2)
end

def build_dictionary(filepath)
  result = []
  File.open(filepath) do |f|
    f.each_line do |line|
      result << line.chomp # result.push(line.chomp)
    end
  end
  result
end

def combine(word1, word2)
  word1 + word2[1..-1]
end

def search
  wordlist = build_dictionary("words.txt")
  wordlist.each do |word1|
    wordlist.each do |word2|
      if word1 == word2
        next
      elsif special_pair?(word1, word2)
        puts combine(word1, word2)
      end
    end
  end
end

Pry.start
