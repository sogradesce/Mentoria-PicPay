function isograma(s: string): boolean {

    for (let i = 0; i < s.length / 2; i++)
    if (s[i] !=s[s.length - i - 1])
      if (s > " ")
    s.replaceAll("-"," ");

    return false
};
export default isograma;
