using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TiempoSkills.Entities
{
    public abstract class EntityBase
    {
        public EntityBase()
        {
            Id = Guid.Empty.ToString();
        }

        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string ObjectId { get; set; }

        public string Id { get; set; }


    }
}
