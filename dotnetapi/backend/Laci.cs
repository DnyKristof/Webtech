namespace backend
{
    public class Laci
    {
        public string Name { get; set; }
        public int Age { get; set; }
        public string[] Hobbies { get; set; }
        public bool Tömő { get; set; } 
        public bool Hee { get; set; } 

        public Laci(string name, int age, string[] hobbies)
        {
            Name = name;
            Age = age;
            Hobbies = hobbies;
            Tömő = true;
            Hee = true;
        }

        public static void RóliMegjelenik()
        {
            Console.WriteLine("Heeeeee");
        }
        public static void GidoMegjelenik()
        {
            Console.WriteLine("Ténégyzet?");
        }
        public static void KevinMegjelenik()
        {
            Console.WriteLine("Forti?");
        }
    }
}
