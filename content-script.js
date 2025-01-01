const hideDifficultyTags = ()=>{
    const easyDifficultyTag =
        document.getElementsByClassName('text-difficulty-easy');
    const mediumDifficultyTag =
        document.getElementsByClassName('text-difficulty-medium');
    const hardDifficultyTag =
        document.getElementsByClassName('text-difficulty-hard');

    console.log(easyDifficultyTag,mediumDifficultyTag,hardDifficultyTag);

    if(easyDifficultyTag.item(0)) {
        easyDifficultyTag.item(0).style.display = "none";
    }
    if(mediumDifficultyTag.item(0)) {
        mediumDifficultyTag.item(0).style.display = "none";
    }
    if(hardDifficultyTag.item(0)) {
        hardDifficultyTag.item(0).style.display = "none";
    }
}

hideDifficultyTags();