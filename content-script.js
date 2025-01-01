const hideDifficultyTags = ()=>{
    const difficultyTag =
        document.getElementsByClassName('text-difficulty-easy');

    console.log(difficultyTag);
    if(difficultyTag.item(0)) {
        difficultyTag.item(0).style.display = "none";
    }
}

hideDifficultyTags();