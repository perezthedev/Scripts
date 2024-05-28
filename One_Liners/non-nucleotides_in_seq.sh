#!/bin/sh
###############################################################################################
# Obj: search a file for non-nucleotide characters
# How:-----------------------------------------------------------------------------------------
# inverse search a .FASTA file's header lines (which start with '>'), and 
# color code anything that is not nucleotides (when '^' is used in brackets) (ATCG) in red
# Exceptions:----------------------------------------------------------------------------------
# 'Y' can represent pyrimidine bases (C or T)
# 'R' represents purine bases (G or A)
# 'D' represents A,G, or T
###############################################################################################

grep -v "^>" file.fasta | grep --color -i "[^ATCG]"
