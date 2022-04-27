export PS1="🌿 underneath \w\n\u$ "

eval echo "~$different_user"  

alias oldtree="find . -not -path '*/\.*' -print | sed -e 's;[^/]*/;|;g;s;|; |;g'"

alias treefile="find . -not -path '*/\.*' | xargs  -I {} bash -c 'f={}; echo \$f | sed -e \"s;[^/]*/;|;g;s;|; |;g\"; if [[ \$f == *.txt ]]; then echo; cat \$f; echo; echo; fi'"

#!/bin/bash -       
#title			:treepoem.sh
#description	:This script will sequentially print a directory, along with the file name and directory name.
#author			:Matthew Ragan & Zoe Sandoval
#date			:20200702
#==============================================================================


treeFunction(){

# Function to Sequence Printed Files
# For 'each' file ending in .txt that is found in the current terminal directory
# 'do' 
#	print each using the 'cat' command
# 	then using the 'sleep' command,
# 	wait a variable number of seconds
#	before printing the next file.

#	args:
#	$1 = the directory to use for 'find'
#	$2 = the number of seconds used for sleep

	for each in $(find $1 -name "*.txt")
	do
		echo 
		dirname $each | sed -e "s,[^/]*/, | ,g"
		echo $each | sed -e "s,[^/]*/, | ,g"
		echo
		cat $each
		echo
		sleep $2
	done
}

#	args:
#	. = current working directory
#	1 =	number of seconds for 'sleep'

alias treepoem="treeFunction . 2" 
# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
__conda_setup="$('/Users/alexabonomo/opt/anaconda3/bin/conda' 'shell.bash' 'hook' 2> /dev/null)"
if [ $? -eq 0 ]; then
    eval "$__conda_setup"
else
    if [ -f "/Users/alexabonomo/opt/anaconda3/etc/profile.d/conda.sh" ]; then
        . "/Users/alexabonomo/opt/anaconda3/etc/profile.d/conda.sh"
    else
        export PATH="/Users/alexabonomo/opt/anaconda3/bin:$PATH"
    fi
fi
unset __conda_setup
# <<< conda initialize <<<

