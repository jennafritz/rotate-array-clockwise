def rotate_array(arr, k)
  # type your code in here

  if k === arr.length || arr.length === 0
    return arr
  else
    k.times do
      popped = arr.pop()
      arr.unshift(popped)
    end
  end
  arr
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: [4, 1, 2, 3]"
  print "=> "
  print rotate_array([1, 2, 3, 4], 1)

  puts "Expecting: [7, 8, 9, 10, 1, 2, 3, 4, 5, 6"
  print "=> "
  print rotate_array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4)

  puts "Expecting: [2, 3, 1]"
  print "=> "
  print rotate_array([1, 2, 3], 2)

  puts "Expecting: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
  print "=> "
  print rotate_array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10)

  puts "Expecting: [1, 2, 3]"
  print "=> "
  print rotate_array([1, 2, 3], 3)
  # Don't forget to add your own!
end

# Please add your pseudocode to this file
  # if k is equal to array length or array is empty
    # return array
  # otherwise
    # k times: 
      # pop the last element off the array
      # unshift it back to the front of the array
  # return the now-shifted array

# And a written explanation of your solution
