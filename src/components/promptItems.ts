interface PromptItem {
  type: string;
  items: Array<{
    displayStr: string;
    shStr: string;
    promptStr: string;
  }>;
}
const promptItems: PromptItem[] = [
  {
    type: 'Login information',
    items: [
      { displayStr: 'Hostname', promptStr: 'host', shStr: '%m' },
      { displayStr: 'Full hostname', promptStr: 'host.local', shStr: '%M' },
      { displayStr: 'User name', promptStr: 'user', shStr: '%n' },
    ],
  },
  {
    type: 'Shell state',
    items: [
      { displayStr: 'Return status of last command', promptStr: '0', shStr: '%?' },
      { displayStr: 'Current working directory', promptStr: '/home/user/work', shStr: '%d' },
      { displayStr: 'Current working directory from $HOME', promptStr: '~/work', shStr: '%~' },
      { displayStr: 'Current history event number', promptStr: '2187', shStr: '%h' },
    ],
  },
  {
    type: 'Date and time',
    items: [
      { displayStr: 'yy-mm-dd', promptStr: '19-08-09', shStr: '%D' },
      { displayStr: '24-hour', promptStr: '12:28', shStr: '%T' },
      { displayStr: '12-hour, am/pm', promptStr: '12:28PM', shStr: '%t' },
      { displayStr: '24-hour, w/ sec', promptStr: '12:28', shStr: '%*' },
      { displayStr: 'day-dd', promptStr: 'Sun 17', shStr: '%w' },
      { displayStr: 'mm/dd/yy', promptStr: '08/09/19', shStr: '%W' },
    ],
  },
];

export default promptItems;
