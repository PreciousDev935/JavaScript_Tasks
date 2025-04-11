function kangaroo(x1, v1, x2, v2) {
  if (v1 === v2) {
    return x1 === x2 ? "YES" : "NO";
  }
  const meetingPoint = (x2 - x1) / (v1 - v2);
  return meetingPoint >= 0 && Number.isInteger(meetingPoint) ? "YES" : "NO";
}


console.log(kangaroo(0, 3, 4, 2)); 
