/*
This script prints: 
#
##
###
####
#####
######
#######
*/

for (let count = 0; count < 7; count = count + 1) {
    let hash_string = "";

    for (print_hash = count + 1; print_hash > 0; print_hash = print_hash - 1) {
        hash_string = hash_string + '#';
    }

    console.log(hash_string);

}