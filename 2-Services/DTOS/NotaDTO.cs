namespace MyOwnNotes._2_Services.DTOS
{
    public class NotaDTO
    {
        public int Id { get; set; }
        public DateTime Criacao { get; set; }
        public DateTime? UltimaModificao { get; set; }
        public string? Titulo { get; set; }
        public string texto { get; set; } = string.Empty;
    }
}
