using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GoodNight.Infrastructure.Utils
{
    public static class ServiceUtils
    {
        private static Random random = new Random();

        const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

        public static string RandomKeyGenerator()
        {
            return new string(Enumerable.Repeat(chars, 30).Select(s => s[random.Next(s.Length)]).ToArray());
        }
    }
}
