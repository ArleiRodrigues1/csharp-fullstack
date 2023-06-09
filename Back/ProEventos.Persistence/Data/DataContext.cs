using System;
using ProEventos.Dominio;
using Microsoft.EntityFrameworkCore;

namespace ProEventos.Persistence.Data
{
  public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options)  : base(options)
        { 
            
        }

        public DbSet<Evento>? Eventos { get; set; }
        public DbSet<Lote>? Lotes { get; set; }
        public DbSet<Palestrante>? Palestrantes { get; set; }
        public DbSet<PalestranteEvento>? PalestrantesEventos { get; set; }
        public DbSet<RedeSocial> RedesSociais { get; set;}

          protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<PalestranteEvento>()
                .HasKey(PE => new {PE.EventoId, PE.PalestranteId});
         modelBuilder.Entity<Evento>()
                .HasMany(e => e.RedesSociais)
                .WithOne(rs => rs.Evento)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Palestrante>()
                .HasMany(e => e.RedesSociais)
                .WithOne(rs => rs.Palestrante)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}