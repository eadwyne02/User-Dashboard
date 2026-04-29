export type balance = {
    current:number;
    income: number;
    expenses: number;
}
export type Pot ={
    id: number;
    name: string;
    amount: number;
    goal: number;
    color: string;
};

export type Transaction = {
    id: number;
    description: string;
    amount: number;
    type: "income" | "expense";
    date: string;
    avatar: string;
    name: string
};

export type Budget={
    id: number;
    name: string;
    amount: number;
    color: string;
}

export type Bill= {
    id:number;
    description: string
    amount: number;
    color: string;
}
export type Bill_Due={
    id: number;
    descripion: string;
    date: string;
    amount: number;
}
export type Bill_List = {
    id: number;
    description: string;
    date: string;
    status: 'Paid' | 'Upcoming' | 'Overdue';
    amount: number;
    color: string;
}
export const balance = {
    current: 4836.0,
    income: 3814.25,
    expenses: 1700.5,
};

export const pots: Pot[] = [
    {id:1, name: "Saving", amount:159, goal: 500, color: "bg-teal-800"},
    {id:2, name: "Gift", amount: 40, goal: 100, color: "bg-teal-400"},
    {id:3, name: "Concert Ticket", goal: 200, amount: 110, color: "bg-[#625f70]"},
    { id: 4, name: "New Laptop", goal: 300, amount: 10, color: "bg-[#eed1ba]" },
];

export const transactions: Transaction[] = (
    [
  { id: 1, description: "Spotify", amount: -9.99, type: "expense", date: "01 April 2026", avatar: "https://i.pravatar.cc/150?img=1", name:"Emma Richardson"},
  { id: 2, description: "Salary", amount: 8314.25, type: "income", date: "02 April 2026", avatar: "https://i.pravatar.cc/150?img=2", name:"Savory Bites Bistro"},
  { id: 3, description: "Netflix", amount: -15.0, type: "expense", date: "03 April 2026", avatar: "https://i.pravatar.cc/150?img=3", name:"Daniel Carter"},
  { id: 4, description: "Grocery Store", amount: -54.2, type: "expense", date: "04 April 2026", avatar: "https://i.pravatar.cc/150?img=4", name:"Sun Park"},
  { id: 5, description: "Freelance Payment", amount: 500.0, type: "income", date: "05 April 2026", avatar: "https://i.pravatar.cc/150?img=1", name:"Urban Services Hub"},
  { id: 6, description: "Audiomack", amount: -200.21, type: "expense", date: "06 April 2026", avatar: "https://i.pravatar.cc/150?img=1", name:"Emma Richardson"},
  { id: 7, description: "Gpt", amount: -714.25, type: "income", date: "07 April 2026", avatar: "https://i.pravatar.cc/150?img=2", name:"Savory Bites Bistro"},
  { id: 8, description: "Electricity", amount: 1045.0, type: "expense", date: "08 April 2026", avatar: "https://i.pravatar.cc/150?img=3", name:"Daniel Carter"},
  { id: 9, description: "Water", amount: -543.2, type: "expense", date: "09 April 2026", avatar: "https://i.pravatar.cc/150?img=4", name:"Sun Park"},
  { id: 10, description: "Data Subscription", amount: -100.0, type: "income", date: "10 April 2026", avatar: "https://i.pravatar.cc/150?img=1", name:"Urban Services Hub"},
  { id: 11, description: "Airtime", amount: -90.99, type: "expense", date: "11 April 2026", avatar: "https://i.pravatar.cc/150?img=1", name:"Emma Richardson"},
  { id: 12, description: "Ofering", amount: 314.25, type: "income", date: "12 April 2026", avatar: "https://i.pravatar.cc/150?img=2", name:"Savory Bites Bistro"},
  { id: 13, description: "Tuition Fee", amount: -215.0, type: "expense", date: "13 April 2026", avatar: "https://i.pravatar.cc/150?img=3", name:"Daniel Carter"},
  { id: 14, description: "Books", amount: 54.2, type: "expense", date: "14 April 2026", avatar: "https://i.pravatar.cc/150?img=4", name:"Sun Park"},
  { id: 15, description: "Toietries", amount: 20.0, type: "income", date: "15 April 2026", avatar: "https://i.pravatar.cc/150?img=1", name:"Urban Services Hub"},
]as Transaction[]
).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const budgets: Budget[] = [
    {id:1, name: "Entertainment", amount: 50, color:"#497976"},
    {id:2, name: "Bills", amount: 750, color:"#80c9d5"},
    {id:3, name: "Dining Out", amount: 75, color:"#f0cdad"},
    {id:4, name: "Personal Care", amount: 100, color:"#625f70"},
];
export const budgetLimit = 975;

export const bills: Bill[]=[
    {id:1, description:"Paid Bills", amount:190, color:"#497976"},
    {id:2, description:"Total Upcoming", amount:194.98, color:"#f0cdad" },
    {id:3, description:"Due Soon", amount:59.98, color:"#80c9d5"},
]
export const billsDue: Bill_Due[]=[
    {id:1, descripion:"Internet", date: "April 30", amount:80},
    {id:2, descripion:"Spotify", date: "May 1", amount:10},
    {id:3, descripion:"Gym", date: "May 2", amount:25},
]
export const billsList: Bill_List[]=[
    {id:1, description: "Netflix", date: "April 1", status: "Paid", amount: 15, color:"#e24b4a"},
    {id:2, description: "Electricity", date: "April 5", status: "Paid", amount: 120, color:"#ef9f27"},
    {id:3, description: "Rent", date: "April 1", status: "Paid", amount: 550, color:"#1d9e75"},
    {id:4, description: "Internet", date: "April 30", status: "Upcoming", amount: 80, color:"#378add"},
    {id:5, description: "Spotify", date: "May 1", status: "Upcoming", amount: 10, color:"#1d9e75"},
    {id:6, description: "Gym", date: "May 2", status: "Upcoming", amount: 25, color:"#7f77dd"},
    {id:7, description: "Insurance", date: "April 20", status: "Overdue", amount: 200, color:"#e24b4a"},
    {id:8, description: "Water bill", date: "May 5", status: "Upcoming", amount: 45, color:"#85b7eb"},
]