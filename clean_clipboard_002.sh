#!/bin/bash
# PerezTheDev
# Friday Sept. 13th, 2024
# manifest cleaning

# inspired from:#####################################
# while read -r url; 
# do echo "$url" | sed 's|.*\(\/mnt\/.*\)|\1|';
# done < urls.txt > cleaned_urls.txt
######################################################


# !CAUTIONS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
# 1) will overwrite  if the output file already exists

search_term="/mnt/"

# Check if the help flag is provided
if [ "$1" == "--help" ] || [ "$1" == "-h" ]; then
  echo "Usage: $0 <input.txt> <output.txt> [text_to_append]"
  echo "Purpose: This script extracts paths starting with '$search_term' from"
  echo "each line in <input.txt> and writes the result to <output.txt>."
  echo
  echo "Arguments:"
  echo "  <input.txt>       The input file containing the URLs."
  echo "  <output.txt>      The file where the cleaned URLs will be saved."
  echo "  [text_to_append]  Optional text to append to each line."
  echo
  echo "Example usage:"
  echo "  $0 urls.txt cleaned_urls.txt '_suffix'"
  echo
  echo "Options:"
  echo "  -h, --help        Show this help message and exit."
  exit 0
fi

# Check if two or three arguments are provided
if [ $# -lt 2 ] || [ $# -gt 3 ]; then
  echo "Usage: $0 <input.txt> <output.txt> [text_to_append]"
  echo "Line_of_text[text_to_append_goes_here]"
  exit 1
fi

input_file="$1"
output_file="$2"

# Check if the input file exists
if [ ! -f "$input_file" ]; then
  echo "Error: Input file '$input_file' not found or is not a regular file."
  exit 1
fi

# Check if the third argument (text_to_append) is provided
if [ $# -eq 3 ]; then
  text_to_append="$3"
else
  text_to_append=""  # No text to append if only 2 arguments are provided
fi

# Process the input file and save the cleaned URLs to the output file
while read -r url; do
  [ -z "$url" ] && continue  # Skip empty lines
  cleaned_url=$(echo "$url" | sed "s|.*\($search_term.*\)|\1|")
  echo "$cleaned_url$text_to_append"
done < "$input_file" > "$output_file"

echo "Processing complete. Cleaned URLs saved to $output_file."
