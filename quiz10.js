function titlecase(str)
{
    const newTitle = str.split(" ");
    const updateTitle = [];

    for(let set in newTitle)
    {
      updateTitle[set] = newTitle[set][0].toUpperCase() + newTitle[set].slice(1).toLowerCase();
    }
    return updateTitle.join(" ");
}

console.log(titlecase("fundamental oops concept is more important"));

// this quiz is all String convert to Upper Case ! 