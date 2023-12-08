# UPC Code Problem

## Example:
UPC codes are a set of 12 numbers unique to a product. The last digit of the UPC code is called a check digit. This allows the scanner to perform an internal algorithm that constitutes the accuracy of the barcode content. Here is how the check digit is calculated for the other 11 digits, using the code 6 3938200039 3 in this example;
 
Add together the value of all of the digits in odd positions (digits 1, 3, 5, 7, 9 and 11).  [6 + 9 + 8 + 0 + 0 + 9 = 32];
Multiply that number by 3.  [32 * 3 = 96];
Add together the value of all of the digits in even positions (digits 2, 4, 6, 8 and 10).  [3 + 3 + 2 + 0 + 3 = 11];
Add this sum to the value in step 2.  [96 + 11 = 107];
Take the number in Step 4. To create the check digit, determine the number that, when added to the number in step 4, is a multiple of 10.  [107 + 3 = 110];
The check digit is therefore 3.
 
## Assignment:
Verify whether or not the UPC code “8 7283272832 4” is a valid code. Return true if the UPC code is valid, or false if the UPC code is not valid. Please also include your code. 

## How to review the file
Please take a look at the ```main.js``` file.
